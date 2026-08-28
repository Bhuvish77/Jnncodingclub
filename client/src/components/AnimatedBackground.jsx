/*import { useEffect, useRef } from 'react'

function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let width = 0
    let height = 0
    let animationFrame

    const flakes = []

    const colors = [
      '255,255,255',
      '190,255,245',
      '120,240,255',
      '170,255,220',
    ]

    const createFlake = (initial = false) => {
      return {
        x: Math.random() * width,

        y: initial
          ? Math.random() * height
          : -10,

        radius: Math.random() * 1.7 + 0.5,

        speedY: Math.random() * 0.8 + 0.35,

        speedX: Math.random() * 0.45 - 0.225,

        drift: Math.random() * Math.PI * 2,

        driftSpeed:
          Math.random() * 0.015 + 0.005,

        opacity:
          Math.random() * 0.55 + 0.15,

        color:
          colors[
            Math.floor(
              Math.random() * colors.length
            )
          ],

        sparkle:
          Math.random() > 0.88,

        sparklePhase:
          Math.random() * Math.PI * 2,
      }
    }

    const resize = () => {
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      )

      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr

      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      )

      flakes.length = 0

      const count = Math.min(
        180,
        Math.floor(
          (width * height) / 7000
        )
      )

      for (let i = 0; i < count; i++) {
        flakes.push(createFlake(true))
      }
    }

    const drawFlake = (flake) => {
      let alpha = flake.opacity

      /*
       * Occasional sparkle effect
       
      if (flake.sparkle) {
        const sparkle =
          Math.sin(
            flake.sparklePhase
          )

        alpha *=
          0.65 +
          Math.max(0, sparkle) * 0.35
      }

      /*
       * Soft glow
       
      const glow =
        ctx.createRadialGradient(
          flake.x,
          flake.y,
          0,
          flake.x,
          flake.y,
          flake.radius * 5
        )

      glow.addColorStop(
        0,
        `rgba(${flake.color}, ${alpha})`
      )

      glow.addColorStop(
        0.35,
        `rgba(${flake.color}, ${alpha * 0.35})`
      )

      glow.addColorStop(
        1,
        `rgba(${flake.color}, 0)`
      )

      ctx.beginPath()

      ctx.fillStyle = glow

      ctx.arc(
        flake.x,
        flake.y,
        flake.radius * 5,
        0,
        Math.PI * 2
      )

      ctx.fill()

      /*
       * Snowflake core
       
      ctx.beginPath()

      ctx.fillStyle = `rgba(235,255,255,${alpha})`

      ctx.arc(
        flake.x,
        flake.y,
        flake.radius,
        0,
        Math.PI * 2
      )

      ctx.fill()

      /*
       * Tiny sparkle cross for selected flakes
       
      if (flake.sparkle) {
        const sparkleSize =
          flake.radius * 2.8

        ctx.strokeStyle =
          `rgba(220,255,255,${alpha * 0.7})`

        ctx.lineWidth = 0.6

        ctx.beginPath()

        ctx.moveTo(
          flake.x - sparkleSize,
          flake.y
        )

        ctx.lineTo(
          flake.x + sparkleSize,
          flake.y
        )

        ctx.moveTo(
          flake.x,
          flake.y - sparkleSize
        )

        ctx.lineTo(
          flake.x,
          flake.y + sparkleSize
        )

        ctx.stroke()
      }
    }

    const updateFlake = (flake) => {
      /*
       * Gentle natural horizontal movement
       
      flake.drift += flake.driftSpeed

      flake.x +=
        flake.speedX +
        Math.sin(flake.drift) * 0.25

      /*
       * Main snowfall direction
       
      flake.y += flake.speedY

      /*
       * Sparkle animation
       
      flake.sparklePhase += 0.035

      /*
       * When snow reaches bottom,
       * create a new flake at the top.
       
      if (
        flake.y >
        height + 15
      ) {
        Object.assign(
          flake,
          createFlake(false)
        )
      }

      /*
       * Horizontal wrapping
       
      if (flake.x < -20) {
        flake.x = width + 20
      }

      if (flake.x > width + 20) {
        flake.x = -20
      }
    }

    const animate = () => {
      /*
       * Clear previous frame.
       * No directional flow trails.
       
      ctx.clearRect(
        0,
        0,
        width,
        height
      )

      for (const flake of flakes) {
        updateFlake(flake)
        drawFlake(flake)
      }

      animationFrame =
        requestAnimationFrame(animate)
    }

    resize()

    window.addEventListener(
      'resize',
      resize
    )

    animationFrame =
      requestAnimationFrame(animate)

    return () => {
      window.removeEventListener(
        'resize',
        resize
      )

      cancelAnimationFrame(
        animationFrame
      )
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="animated-background"
      aria-hidden="true"
    />
  )
}

export default AnimatedBackground*/
import { useEffect, useRef } from 'react'

function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let width = 0
    let height = 0
    let animationFrame

    const flakes = []

    const colors = [
      '255,255,255',
      '190,255,245',
      '120,240,255',
      '170,255,220',
    ]

    // Create a single snowflake
    const createFlake = (initial = false) => {
      return {
        x: Math.random() * width,

        y: initial
          ? Math.random() * height
          : -10,

        // Smaller flakes
        radius: Math.random() * 1.4 + 0.4,

        // Gentle falling speed
        speedY: Math.random() * 0.8 + 0.35,

        // Very subtle horizontal movement
        speedX: Math.random() * 0.45 - 0.225,

        // Natural drifting motion
        drift: Math.random() * Math.PI * 2,

        driftSpeed:
          Math.random() * 0.015 + 0.005,

        // Reduced opacity
        opacity:
          Math.random() * 0.40 + 0.10,

        color:
          colors[
            Math.floor(
              Math.random() * colors.length
            )
          ],

        // Only a small percentage sparkle
        sparkle: Math.random() > 0.88,

        sparklePhase:
          Math.random() * Math.PI * 2,
      }
    }

    // Resize canvas
    const resize = () => {
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      )

      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr

      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      )

      flakes.length = 0

      // ==========================================
      // REDUCED SNOWFALL INTENSITY
      // ==========================================
      const count = Math.min(
        90,
        Math.floor(
          (width * height) / 14000
        )
      )

      for (let i = 0; i < count; i++) {
        flakes.push(createFlake(true))
      }
    }

    // Draw snowflake
    const drawFlake = (flake) => {
      let alpha = flake.opacity

      // ==========================================
      // OCCASIONAL SOFT SPARKLE
      // ==========================================
      if (flake.sparkle) {
        const sparkle =
          Math.sin(
            flake.sparklePhase
          )

        alpha *=
          0.65 +
          Math.max(0, sparkle) * 0.35
      }

      // ==========================================
      // SOFT GLOW
      // Reduced from radius * 5 to radius * 4
      // ==========================================
      const glow =
        ctx.createRadialGradient(
          flake.x,
          flake.y,
          0,
          flake.x,
          flake.y,
          flake.radius * 4
        )

      glow.addColorStop(
        0,
        `rgba(${flake.color}, ${alpha})`
      )

      glow.addColorStop(
        0.35,
        `rgba(${flake.color}, ${alpha * 0.30})`
      )

      glow.addColorStop(
        1,
        `rgba(${flake.color}, 0)`
      )

      ctx.beginPath()

      ctx.fillStyle = glow

      ctx.arc(
        flake.x,
        flake.y,
        flake.radius * 4,
        0,
        Math.PI * 2
      )

      ctx.fill()

      // ==========================================
      // SNOWFLAKE CORE
      // ==========================================
      ctx.beginPath()

      ctx.fillStyle =
        `rgba(235,255,255,${alpha})`

      ctx.arc(
        flake.x,
        flake.y,
        flake.radius,
        0,
        Math.PI * 2
      )

      ctx.fill()

      // ==========================================
      // TINY SPARKLE CROSS
      // ==========================================
      if (flake.sparkle) {
        const sparkleSize =
          flake.radius * 2.8

        ctx.strokeStyle =
          `rgba(220,255,255,${alpha * 0.7})`

        ctx.lineWidth = 0.6

        ctx.beginPath()

        ctx.moveTo(
          flake.x - sparkleSize,
          flake.y
        )

        ctx.lineTo(
          flake.x + sparkleSize,
          flake.y
        )

        ctx.moveTo(
          flake.x,
          flake.y - sparkleSize
        )

        ctx.lineTo(
          flake.x,
          flake.y + sparkleSize
        )

        ctx.stroke()
      }
    }

    // Update snowflake position
    const updateFlake = (flake) => {
      // ==========================================
      // NATURAL HORIZONTAL DRIFT
      // ==========================================
      flake.drift += flake.driftSpeed

      flake.x +=
        flake.speedX +
        Math.sin(flake.drift) * 0.25

      // ==========================================
      // MAIN FALLING MOTION
      // ==========================================
      flake.y += flake.speedY

      // ==========================================
      // SPARKLE ANIMATION
      // ==========================================
      flake.sparklePhase += 0.035

      // ==========================================
      // RESET WHEN SNOW REACHES BOTTOM
      // ==========================================
      if (
        flake.y >
        height + 15
      ) {
        Object.assign(
          flake,
          createFlake(false)
        )
      }

      // ==========================================
      // HORIZONTAL WRAPPING
      // ==========================================
      if (flake.x < -20) {
        flake.x = width + 20
      }

      if (flake.x > width + 20) {
        flake.x = -20
      }
    }

    // Animation loop
    const animate = () => {
      // Clear previous frame
      ctx.clearRect(
        0,
        0,
        width,
        height
      )

      // Update and draw every flake
      for (const flake of flakes) {
        updateFlake(flake)
        drawFlake(flake)
      }

      animationFrame =
        requestAnimationFrame(animate)
    }

    // Initial setup
    resize()

    window.addEventListener(
      'resize',
      resize
    )

    animationFrame =
      requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener(
        'resize',
        resize
      )

      cancelAnimationFrame(
        animationFrame
      )
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="animated-background"
      aria-hidden="true"
    />
  )
}

export default AnimatedBackground