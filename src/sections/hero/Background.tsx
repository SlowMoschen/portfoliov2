import { useEffect, useRef } from "react"
import { COLORS } from "../../utils/configs/colors"
import { getIntInRange, omitKeys } from "../../utils/helper"
import { useScreenSize } from "../../utils/hooks/useScreenSize"
import './styles/Background.css'

const CONFIG = {
    particles: {
        number: 100,
        size: {
            min: 3,
            max: 8,
        },
        speed: {
            min: 0.05,
            max: 0.2,
        }
    },
}

interface Particle {
    x: number
    y: number
    vy: number
    color: string
    size: number
    isBlurred?: boolean
}

export default function Background() {
    const { screenWidth, screenHeight } = useScreenSize()
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const getRandomColor = () => {
        const colorKeys = omitKeys(COLORS, ['background', 'text'])
        const colors = Object.keys(colorKeys) as (keyof typeof colorKeys)[]
        return COLORS[colors[Math.floor(Math.random() * colors.length)]]
    }
    
    const generateParticles = (canvas: HTMLCanvasElement) => {
        const ctx = canvas.getContext('2d')
        const particles: Particle[] = Array.from({ length: CONFIG.particles.number }, (): Particle => {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vy: getIntInRange(CONFIG.particles.speed.min, CONFIG.particles.speed.max),
                color: getRandomColor(),
                size: getIntInRange(CONFIG.particles.size.min, CONFIG.particles.size.max),
                isBlurred: Math.random() > 0.5,
            }
        })
    
        const drawParticle = (particle: Particle) => {
            if (ctx) {
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fillStyle = particle.color
                if (particle.isBlurred) {
                    ctx.shadowColor = particle.color
                    ctx.shadowBlur = 20
                }
                ctx.fill()
            }
        }
    
        const animateParticle = (particle: Particle) => {
            particle.y -= particle.vy
            if (particle.y < 0) {
                particle.y = canvas.height
            }
        }
    
        const draw = () => {
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                particles.forEach((particle) => {
                    drawParticle(particle)
                    animateParticle(particle)
                })
            }
            requestAnimationFrame(draw)
        }
    
        draw()
    }

    const resizeCanvas = () => {
        const canvas = canvasRef.current
        if (canvas) {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            generateParticles(canvas)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        resizeCanvas()
    }, [screenWidth, screenHeight])

    return (
        <canvas className="bg-canvas" ref={canvasRef}></canvas>
    )
}