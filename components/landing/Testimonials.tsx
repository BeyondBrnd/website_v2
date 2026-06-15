'use client'

import React from 'react'
import Image from 'next/image'

const images = [
  { src: '/testimonials/Akash.png', name: 'Akash' },
  { src: '/testimonials/Julian.png', name: 'Julian' },
  { src: '/testimonials/Nithin.png', name: 'Nithin' },
  { src: '/testimonials/Sejal.png', name: 'Sejal' },
  { src: '/testimonials/Shreya.png', name: 'Shreya' },
  { src: '/testimonials/sandeep.png', name: 'Sandeep' },
]

export default function Testimonials() {
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

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-3">
          {images.map((img) => (
            <div key={img.name} className="overflow-hidden rounded-2xl shadow-sm">
              <Image
                src={img.src}
                alt={`${img.name} testimonial`}
                width={600}
                height={800}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
