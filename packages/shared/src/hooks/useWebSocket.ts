'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'

interface Message {
	id: number
	text: string
	from: string
	fromName?: string
	to?: string
	timestamp: string
}

interface Client {
	id: string
	name: string
	connected: boolean
}

interface UseWebSocketOptions {
	isAdmin?: boolean
	userName?: string
}

export const useWebSocket = ({ isAdmin = false, userName = '' }: UseWebSocketOptions) => {
	const [socket, setSocket] = useState<Socket | null>(null)
	const [isConnected, setIsConnected] = useState(false)
	const [isRegistered, setIsRegistered] = useState(false)
	const [clients, setClients] = useState<Client[]>([])
	const [messages, setMessages] = useState<Message[]>([])
	const [selectedClient, setSelectedClient] = useState<string | null>('wPMm6m0SxTh14sTTAAAH')
	const [error, setError] = useState<string | null>(null)
	const userId = useRef<string>('')

	// Функция для загрузки данных из sessionStorage
	const loadFromStorage = useCallback(() => {
		try {
			const storedClients = sessionStorage.getItem('chat_clients')
			const storedMessages = sessionStorage.getItem('chat_messages')
			const storedUserId = sessionStorage.getItem('chat_user_id')

			if (storedClients) {
				setClients(JSON.parse(storedClients))
			}

			if (storedMessages) {
				setMessages(JSON.parse(storedMessages))
			}

			if (storedUserId) {
				userId.current = storedUserId
			}
		} catch (e) {
			console.error('Error loading data from sessionStorage:', e)
		}
	}, [])

	// Функция для сохранения данных в sessionStorage
	const saveToStorage = useCallback(() => {
		try {
			sessionStorage.setItem('chat_clients', JSON.stringify(clients))
			sessionStorage.setItem('chat_messages', JSON.stringify(messages))
			if (userId.current) {
				sessionStorage.setItem('chat_user_id', userId.current)
			}
		} catch (e) {
			console.error('Error saving data to sessionStorage:', e)
		}
	}, [clients, messages])

	// Инициализация соединения
	useEffect(() => {
		// Загрузка данных из sessionStorage при инициализации
		loadFromStorage()

		const socketInstance = io('http://localhost:5500')
		setSocket(socketInstance)

		socketInstance.on('connect', () => {
			setIsConnected(true)
			setError(null)
		})

		socketInstance.on('connect_error', (err) => {
			setIsConnected(false)
			setError(`Connection error: ${err.message}`)
		})

		socketInstance.on('disconnect', () => {
			setIsConnected(false)
		})

		return () => {
			socketInstance.disconnect()
		}
	}, [loadFromStorage])

	// Сохранение данных в sessionStorage при их изменении
	useEffect(() => {
		saveToStorage()
	}, [clients, messages, saveToStorage])

	// Регистрация пользователя
	const register = useCallback(() => {
		if (!socket || !isConnected || !userName) return

		socket.emit('register', { name: userName, isAdmin })

		socket.on('registered', (response) => {
			if (response.success) {
				setIsRegistered(true)
				userId.current = response.id
				sessionStorage.setItem('chat_user_id', response.id)
			}
		})

		// Только для админа - получение списка клиентов
		if (isAdmin) {
			socket.on('clientsList', (clientsList) => {
				setClients(clientsList)
			})

			socket.on('newClient', (client) => {
				setClients((prevClients) => [...prevClients, client])
			})

			socket.on('clientDisconnected', (data) => {
				setClients((prevClients) =>
					prevClients.map((client) =>
						client.id === data.id ? { ...client, connected: false } : client
					)
				)
			})

			socket.on('clientRemoved', (data) => {
				setClients((prevClients) => prevClients.filter((client) => client.id !== data.id))
			})

			socket.on('clientMessage', (message) => {
				setMessages((prevMessages) => [...prevMessages, message])
			})

			socket.on('clientSelected', (data) => {
				setSelectedClient(data.id)
			})
		} else {
			// Для клиента - получение сообщений от админа
			socket.on('message', (message) => {
				setMessages((prevMessages) => [...prevMessages, message])
			})
		}
	}, [socket, isConnected, userName, isAdmin])

	// Отправка сообщения
	const sendMessage = useCallback(
		(text: string) => {
			if (!socket || !isRegistered) return

			if (isAdmin && selectedClient) {
				// Админ отправляет сообщение выбранному клиенту
				const messageData = {
					text,
					isAdmin: true,
					to: selectedClient,
				}
				socket.emit('message', messageData)

				// Добавляем сообщение в локальный список
				const newMessage = {
					id: Date.now(),
					text,
					from: 'Rai',
					to: selectedClient,
					timestamp: new Date().toISOString(),
				}
				setMessages((prevMessages) => [...prevMessages, newMessage])
			} else {
				// Клиент отправляет сообщение админу
				const messageData = {
					text,
					fromName: userName,
					isAdmin: false,
				}
				socket.emit('message', messageData)

				// Добавляем сообщение в локальный список
				const newMessage = {
					id: Date.now(),
					text,
					from: userId.current,
					fromName: userName,
					timestamp: new Date().toISOString(),
				}
				setMessages((prevMessages) => [...prevMessages, newMessage])
			}
		},
		[socket, isRegistered, isAdmin, selectedClient, userName]
	)

	// Выбор клиента (только для админа)
	const selectClient = useCallback(
		(clientId: string) => {
			if (!socket || !isAdmin) return
			socket.emit('selectClient', clientId)
			setSelectedClient(clientId)
		},
		[socket, isAdmin]
	)

	// Получение сообщений для выбранного клиента
	const getMessagesForSelectedClient = useCallback(() => {
		if (!selectedClient && !isAdmin) return messages

		return isAdmin
			? messages.filter((msg) => msg.from === selectedClient || msg.to === selectedClient)
			: messages
	}, [messages, selectedClient, isAdmin])

	return {
		isConnected,
		isRegistered,
		register,
		sendMessage,
		clients,
		messages,
		selectedClient,
		selectClient,
		getMessagesForSelectedClient,
		error,
	}
}
