'use client'

import React from 'react'
import { PinContainer } from '@/components/ui/PinContainer'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa'

type TProps = {
  id: number
  title: string
  description: string
  img: string
  iconLists?: string[]
  link: string
  cuteLink: string
  gitHubLink: string
}
export function Container3D({
  id,
  title,
  description,
  img,
  iconLists,
  link,
  cuteLink,
  // TODO ADD LINKS
  gitHubLink
}: TProps) {
  return (
    <PinContainer href={link} cuteLink={cuteLink}>
      {/* image */}
      <div
        className='relative flex items-center justify-center
          max-sm:px-4 max-sm:min-w-[90vw] sm:w-[570px] lg:w-full lg:min-w-[496px]
          sm:h-[40vh] h-[30vh]
          mb-10
          overflow-hidden
        '
      >
        <div className='relative h-5/6 w-full overflow-hidden rounded-xl bg-[#13162d]'>
          <Image src='/bg.png' fill alt='bg-image' />
        </div>
        <Image
          src={img}
          fill
          alt={title}
          className='z-10 object-cover absolute inset-0 rounded-xl'
        />
      </div>

      {/* content */}
      <h2 className='line-clamp-1 font-bold text-base md:text-xl lg:text-2xl'>
        {title}
      </h2>
      <div className='text-base font-normal'>
        <span className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
          {description}{' '}
        </span>
      </div>

      {/* icons + link */}
      <div className='flex items-center justify-between mt-7 mb-3'>
        <div className='flex items-center max-sm:gap-x-1 sm:space-x-6'>
          {iconLists &&
            iconLists?.map((icon, index) => {
              return (
                <div
                  key={icon}
                  className='flex items-center justify-center border border-white/[0.2] rounded-full
                    bg-black w-8 h-8 lg:w-10 lg:h-10'
                  style={{ transform: `translateX(-${15 * index}px)` }}
                >
                  <Image
                    src={icon}
                    alt={icon}
                    width={40}
                    height={40}
                    className='p-2'
                  />
                </div>
              )
            })}
        </div>
        {/* link */}
        <div className='flex items-center space-x-2 lg:text-xl md:text-xs text-sm'>
          <a target='_blank' href={link} className='whitespace-nowrap'>
            {cuteLink.includes('api') ? 'Visit Postman' : 'Visit Live Site'}
          </a>
          {cuteLink.includes('api') ? (
            <div className='relative h-7 w-7'>
              <Image src='/postman.svg' className='mr-4' fill alt='postman' />
            </div>
          ) : (
            <FaLocationArrow className='self-center' color='#CBACF9' />
          )}
        </div>
      </div>
    </PinContainer>
  )
}
