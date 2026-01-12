'use client'

import { useEffect } from 'react'
// @ts-expect-error AOS has no TypeScript types; ignoring for compatibility
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useInitAnimations = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    requestAnimationFrame(() => {
      // AOS Init
      AOS.init({
        mirror: false,
        once: true,
        delay: 0,
        duration: 1500,
        offset: 0,
      })

      // Lenis Init
      const lenis = new Lenis({
        autoRaf: false,
        duration: 1.5,
      })

      lenis.on('scroll', () => {
        AOS.refresh()
        ScrollTrigger.update()
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
      // wave animation
     const wavesOptions = [
        { className: '.d2c_wave_animation1', scale: 1.2, duration: 1 },
        { className: '.d2c_wave_animation2', scale: 1.3, duration: 2 },
        { className: '.d2c_wave_animation3', scale: 1.3, duration: 0.8 },
      ];  

      wavesOptions.forEach(({ className, scale, duration }) => {
        const elements = document.querySelectorAll(className);
        if (elements.length > 0) {
          gsap.to(elements, {
            scale,
            duration,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
            transformOrigin: 'center',
          });
        }
      });

      // Scroll-animate (scale and rotate)
      const scrollElements = document.querySelectorAll('.scroll-animate')
      if (scrollElements.length > 0) {
        const options = {
          startScale: 0.8,
          endScale: 1,
          startRotate: 30,
          endRotate: 0,
          animateUntil: 0.5,
        }

        scrollElements.forEach((el) => {
          const element = el as HTMLElement
          let isVisible = false

          const observer = new IntersectionObserver(
            ([entry]) => (isVisible = entry.isIntersecting),
            { threshold: 0.1 }
          )
          observer.observe(element)

          if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
              if (!isVisible) return

              const rect = element.getBoundingClientRect()
              const vh = window.innerHeight

            const end = vh * options.animateUntil
            const progress = Math.min(Math.max((vh - rect.top) / (vh - end), 0), 1)

            const scale = options.startScale + (options.endScale - options.startScale) * progress
            const rotateX = options.startRotate + (options.endRotate - options.startRotate) * progress

            element.style.transform = `perspective(1200px) scale(${scale}) rotateX(${rotateX}deg)`
            })
          }
        })
      }

      // Zoom with scrolltrigger
      const scrollElements2 = document.querySelectorAll('.scroll-Zoom')

      if (scrollElements2.length > 0) {
        const options = {
          startScale: 0.8,
          endScale: 1,
          animateUntil: 0.5, // 50% of viewport height
        }

        scrollElements2.forEach((el) => {
          const element = el as HTMLElement
          let isVisible = false

          const observer = new IntersectionObserver(
            ([entry]) => (isVisible = entry.isIntersecting),
            { threshold: 0.1 }
          )
          observer.observe(element)

          if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
              if (!isVisible) return

              const rect = element.getBoundingClientRect()
              const vh = window.innerHeight

              const end = vh * options.animateUntil
              const progress = Math.min(
                Math.max((vh - rect.top) / (vh - end), 0),
                1
              )

              const scale =
                options.startScale +
                (options.endScale - options.startScale) * progress

              element.style.transform = `perspective(1200px) scale(${scale})`
            })
          }
        })
      }


      // Hover Tilt
      // function handleMouseMove(e: MouseEvent) {
      //   const card = e.currentTarget as HTMLElement
      //   const rect = card.getBoundingClientRect()
      //   const x = e.clientX - rect.left
      //   const y = e.clientY - rect.top

      //   const centerX = rect.width / 2
      //   const centerY = rect.height / 2

      //   const rotateX = ((y - centerY) / centerY) * 5
      //   const rotateY = ((x - centerX) / centerX) * -5

      //   gsap.to(card, {
      //     rotationX: rotateX,
      //     rotationY: rotateY,
      //     transformPerspective: 1000,
      //     transformOrigin: 'center',
      //     duration: 1,
      //     ease: 'power2.out',
      //   })
      // }

      // function handleMouseLeave(e: MouseEvent) {
      //   const card = e.currentTarget as HTMLElement
      //   gsap.to(card, {
      //     rotationX: 0,
      //     rotationY: 0,
      //     duration: 1,
      //     ease: 'power2.out',
      //   })
      // }

      // document.querySelectorAll('.d2c_team_card').forEach((card) => {
      //   card.addEventListener('mousemove', handleMouseMove as EventListener)
      //   card.addEventListener('mouseleave', handleMouseLeave as EventListener)
      // })
    })

    const slideObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            width: '100%',
            duration: 2,
            ease: 'power2.out',
          })
          slideObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })
    document.querySelectorAll('.d2c_slide_animation').forEach((img) => {
      gsap.set(img, { width: 0 })
      slideObserver.observe(img)
    })
  }, [])
}