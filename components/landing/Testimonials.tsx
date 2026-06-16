'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/testimonials/Akash.png', name: 'Akash' },
  { src: '/testimonials/Julian.png', name: 'Julian' },
  { src: '/testimonials/Nithin.png', name: 'Nithin' },
  { src: '/testimonials/Sejal.png', name: 'Sejal' },
  { src: '/testimonials/Shreya.png', name: 'Shreya' },
  { src: '/testimonials/sandeep.png', name: 'Sandeep' },
]

const VISIBLE = 3

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, images.length - VISIBLE)

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
          <p className="mt-3 text-sm text-black/60">
            Real feedback from founders and experts we&apos;ve worked with.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * (100 / VISIBLE)}%)` }}
            >
              {images.map((img) => (
                <div
                  key={img.name}
                  className="min-w-0 shrink-0 px-3"
                  style={{ flex: `0 0 ${100 / VISIBLE}%` }}
                >
                  <div className="overflow-hidden rounded-2xl shadow-sm">
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
              className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 text-black/60" />
            </button>
          )}
          {index < maxIndex && (
            <button
              onClick={next}
              className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 text-black/60" />
            </button>
          )}

          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-[#00bf63]' : 'w-2 bg-black/20'
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
