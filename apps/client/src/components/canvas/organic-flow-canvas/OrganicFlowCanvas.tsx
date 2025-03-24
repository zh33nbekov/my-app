'use client'

import React, { useEffect, useRef } from 'react'
import styles from './organic-flow-canvas.module.scss'

interface FlowParticle {
	x: number
	y: number
	radius: number
	color: string
	angle: number
	speed: number
}

export const OrganicFlowCanvas: React.FC = () => {
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

		// Create flow particles
		const particleCount = 200
		const particles: FlowParticle[] = Array.from({ length: particleCount }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			radius: Math.random() * 3 + 1,
			color: `hsl(${Math.random() * 360}, 70%, 60%)`,
			angle: Math.random() * Math.PI * 2,
			speed: Math.random() * 0.5 + 0.1,
		}))

		// Noise function for organic movement
		const noise = (x: number, y: number, z: number) => {
			const X = Math.floor(x)
			const Y = Math.floor(y)
			const Z = Math.floor(z)

			x -= X
			y -= Y
			z -= Z

			const u = (x: number) => x * x * (3 - 2 * x)
			const lerp = (a: number, b: number, x: number) => a + x * (b - a)

			const A = Math.random() * 256
			const B = Math.random() * 256
			const AA = Math.random() * 256
			const AB = Math.random() * 256
			const BA = Math.random() * 256
			const BB = Math.random() * 256

			return lerp(
				lerp(lerp(A, B, u(x)), lerp(AA, AB, u(x)), u(y)),
				lerp(lerp(BA, BB, u(x)), lerp(AA, AB, u(x)), u(y)),
				u(z)
			)
		}

		const animate = () => {
			requestAnimationFrame(animate)
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			// Soft gradient background
			const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
			gradient.addColorStop(0, 'rgba(30, 20, 60, 0.9)')
			gradient.addColorStop(1, 'rgba(60, 40, 100, 0.9)')
			ctx.fillStyle = gradient
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			particles.forEach((particle) => {
				// Organic flow movement using noise
				const noiseValue = noise(particle.x * 0.01, particle.y * 0.01, Date.now() * 0.0001)

				particle.angle += (noiseValue - 0.5) * 0.2
				particle.x += Math.cos(particle.angle) * particle.speed
				particle.y += Math.sin(particle.angle) * particle.speed

				// Wrap around
				if (particle.x < 0) particle.x = canvas.width
				if (particle.x > canvas.width) particle.x = 0
				if (particle.y < 0) particle.y = canvas.height
				if (particle.y > canvas.height) particle.y = 0

				// Draw particle
				ctx.beginPath()
				ctx.fillStyle = particle.color
				ctx.globalAlpha = 0.6
				ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
				ctx.fill()
			})
		}

		animate()

		return () => {
			window.removeEventListener('resize', resizeCanvas)
		}
	}, [])

	return <canvas ref={canvasRef} className={styles.organicFlowCanvas} />
}
