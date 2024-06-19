import React from 'react'
import { twMerge } from 'tailwind-merge'

type TProps = {
  className?: string
}
export function GridBackground({ className }: TProps) {
  return (
    <div
      className={twMerge(
        `h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black/[0.02] relative flex items-center justify-center`,
        className
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
    </div>
  )
}
