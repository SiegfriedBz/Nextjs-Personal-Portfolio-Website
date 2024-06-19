import ShowMyWorkButton from '@/components/ShowMyWorkButton'
import { TextEffect } from '@/components/TextEffect'
import { GridBackground } from '@/components/ui/GridBackground'
import { Spotlight } from '@/components/ui/Spotlight'

const Hero = () => {
  return (
    <div className='pt-36 pb-20 min-h-[100svh]'>
      <SpotLights />
      <GridBackground className='absolute inset-0' />
      <HeroContent />
      <ShowMyWorkButton />
    </div>
  )
}

export default Hero

const SpotLights = () => {
  return (
    <div>
      <Spotlight
        fill='white'
        className='-top-40 -left-10
          md:-left-32 md:-top-20
          h-screen
        '
      />
      <Spotlight
        fill='purple'
        className='top-10 left-full
          h-[80vh] w-[50vw]
        '
      />
      <Spotlight
        fill='blue'
        className='top-28 left-80
          h-[80vh] w-[50vw]
        '
      />
    </div>
  )
}

const HeroContent = () => {
  return (
    <div className='flex justify-center relative my-20 z-10'>
      <div
        className='flex flex-col items-center justify-center
          max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]'
      >
        <h2 className='uppercase text-xs tracking-widest text-blue-100 max-w-80'>
          Dynamic Web Magic with Next.js
        </h2>
        <TextEffect
          className='text-center text-4xl md:text-5xl lg:text-6xl'
          words='Transforming Concepts into Seamless User Experiences'
        />
        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
          Hi, I&apos;m Siegfried, a Next.js developer based in Europe.
        </p>
      </div>
    </div>
  )
}
