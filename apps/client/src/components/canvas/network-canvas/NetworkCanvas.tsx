'use client'

import React, { useEffect, useRef } from 'react'
import styles from './network-canvas.module.scss'

interface Node {
	x: number
	y: number
	radius: number
	vx: number
	vy: number
}

export const NetworkCanvas: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		// Resize canvas
		const resizeCanvas = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}
		resizeCanvas()
		window.addEventListener('resize', resizeCanvas)

		// Create nodes
		const nodeCount = 100
		const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			radius: Math.random() * 3 + 1,
			vx: (Math.random() - 0.5) * 2,
			vy: (Math.random() - 0.5) * 2,
		}))

		const animate = () => {
			requestAnimationFrame(animate)
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			// Soft background gradient
			const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
			gradient.addColorStop(0, 'rgba(40, 40, 80, 0.9)')
			gradient.addColorStop(1, 'rgba(20, 20, 60, 0.9)')
			ctx.fillStyle = gradient
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			// Update and draw nodes
			nodes.forEach((node) => {
				// Move nodes
				node.x += node.vx
				node.y += node.vy

				// Bounce off edges
				if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1
				if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1

				// Draw node
				ctx.beginPath()
				ctx.fillStyle = 'rgba(100, 150, 255, 0.7)'
				ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
				ctx.fill()
			})

			// Connect nearby nodes
			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const dx = nodes[i].x - nodes[j].x
					const dy = nodes[i].y - nodes[j].y
					const distance = Math.sqrt(dx * dx + dy * dy)

					// Connect nodes if close enough
					if (distance < 100) {
						ctx.beginPath()
						ctx.strokeStyle = `rgba(100, 150, 255, ${1 - distance / 100})`
						ctx.lineWidth = 1
						ctx.moveTo(nodes[i].x, nodes[i].y)
						ctx.lineTo(nodes[j].x, nodes[j].y)
						ctx.stroke()
					}
				}
			}
		}

		animate()

		return () => {
			window.removeEventListener('resize', resizeCanvas)
		}
	}, [])

	return <canvas ref={canvasRef} className={styles.networkCanvas} />
}
