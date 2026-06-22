'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/testimonials/Akash.png', name: 'Akash' },
  { src: '/testimonials/Julian.png', name: 'Julian' },
  { src: '/testimonials/Nithin.png', name: 'Nithin' },
  { src: '/testimonials/Sejal.png', name: 'Sejal' },
  { src: '/testimonials/Shreya.png', name: 'Shreya' },
  { src: '/testimonials/sandeep.png', name: 'Sandeep' },
  { src: '/testimonials/Melvin.png', name: 'Melvin' },
]

export default function Testimonials() {
  const [visible, setVisible] = useState(3)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisible(1)
      } else if (window.innerWidth < 1024) {
        setVisible(2)
      } else {
        setVisible(3)
      }
    }
    updateVisible()
    window.addEventListener('resize', updateVisible)
    return () => window.removeEventListener('resize', updateVisible)
  }, [])

  const maxIndex = Math.max(0, images.length - visible)

  useEffect(() => {
    setIndex((prev) => Math.min(prev, Math.max(0, images.length - visible)))
  }, [visible])

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1))

  return (
    <section className="glass-section py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            What Clients say about{' '}
            <span className="text-[#00bf63]">Beyondbrnd</span> Services?
          </h2>
          <p className="mt-3 text-xl font-semibold text-black/60">
            Real feedback from founders and experts we&apos;ve worked with.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
            >
              {images.map((img) => (
                <div
                  key={img.name}
                  className="min-w-0 shrink-0"
                  style={{ flex: `0 0 ${100 / visible}%` }}
                >
                  <div className="mx-3 overflow-hidden rounded-2xl shadow-sm">
                    <Image
                      src={img.src}
                      alt={`${img.name} testimonial`}
                      width={600}
                      height={800}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {index > 0 && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:shadow-lg sm:-left-4"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-black/60" />
            </button>
          )}
          {index < maxIndex && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:shadow-lg sm:-right-4"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-black/60" />
            </button>
          )}

          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-[#00bf63]' : 'w-2 bg-black/20'
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
