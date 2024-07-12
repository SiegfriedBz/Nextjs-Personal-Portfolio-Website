import { TextEffect } from '@/components/TextEffect'
import { GridBackground } from '@/components/ui/GridBackground'
import { Spotlight } from '@/components/ui/Spotlight'
import { ButtonMagicAs } from './ui/ButtonMagicAs'

const Hero = () => {
  return (
    <div className='max-sm:pt-16 max-sm:pb-20 sm:pt-36 sm:pb-20 h-[100lvh]'>
      <SpotLights />
      <GridBackground className='absolute inset-0' />
      <HeroContent />
      <SeeMyWorkButton />
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
        {/* <h2 className='uppercase text-xs tracking-widest text-blue-100 max-w-80 text-center'>
          From Biology & Engineering to Crafting Code
        </h2> */}
        <TextEffect
          className='text-center text-4xl lg:text-5xl xl:text-6xl'
          words='From Biology & Engineering to Crafting Code: Ready to Thrive as a JavaScript Web Developer.'
        />
        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
          Hi, I&apos;m Siegfried, a JavaScript full-stack web developer based in
          Europe.
        </p>
      </div>
    </div>
  )
}

const SeeMyWorkButton = () => {
  return (
    <ButtonMagicAs
      as='Link'
      href='#projects'
      className='flex justify-center max-md:-mt-8 md:-mt-8'
      otherClassNames='w-80'
      label='See my work'
      iconPosition='right'
    />
  )
}
