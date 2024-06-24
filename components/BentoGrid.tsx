import CustomGlobe from '@/components/CustomGlobe'
import TechStack from '@/components/TechStack'
import { BgGradientAnimation } from '@/components/ui/BgGradientAnimation'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import LastCardButtonMagic from './LastCardButtonMagic'

// const nonPurgedTailwindClasses = [
//   'md:row-span-4 md:col-span-6 lg:col-span-3 lg:row-span-2 lg:min-h-[60vh]',
//   'md:row-span-2 md:col-span-3 lg:col-span-2 lg:row-span-1',
//   'md:row-span-2 md:col-span-3 lg:col-span-2 lg:row-span-1',
//   'md:row-span-1 md:col-span-3 lg:col-span-2',
//   'md:col-span-3 md:row-span-2',
//   'md:row-span-1 md:col-span-3 lg:col-span-2'
// ]

export const BentoGrid = ({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-rows-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  id,
  title,
  description,
  className,
  imgClassName,
  titleClassName,
  img,
  secondImg
}: {
  id: number
  title: string
  description: string
  className?: string
  imgClassName?: string
  titleClassName?: string
  img?: string
  secondImg?: string
}) => {
  return (
    <div
      className={cn(
        `row-span-1 
          relative 
          overflow-hidden
          rounded-3xl 
          group/bento 
          hover:shadow-xl 
          transition duration-200 
          shadow-input 
          dark:shadow-none 
          border
          border-white/[0.15] 
          justify-between 
          flex flex-col space-y-4`,
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(28,25,83,1) 0%, rgba(48,48,108,1) 35%, rgba(39,176,204,1) 100%)'
      }}
    >
      <div className={`${id === 6 ? 'flex justify-center h-full' : ''}`}>
        {img && (
          <FirstImage img={img} title={title} imgClassName={imgClassName} />
        )}

        {secondImg && (
          <SecondImage id={id} secondImg={secondImg} title={title} />
        )}

        <CardContent
          titleClassName={titleClassName}
          title={title}
          description={description}
        >
          {id === 2 && <CustomGlobe />}
          {id === 3 && <TechStack />}
          {id === 6 && (
            <>
              <LastCardAnimation />
              <LastCardButtonMagic />
            </>
          )}
        </CardContent>
      </div>
    </div>
  )
}

const FirstImage = ({
  img,
  title,
  imgClassName
}: {
  img: string
  title: string
  imgClassName?: string
}) => {
  return (
    <div className='absolute inset-0'>
      {img && (
        <Image
          src={`${img}`}
          fill
          alt={title}
          className={cn(
            imgClassName,
            'object-cover object-center rounded-3xl '
          )}
        />
      )}
    </div>
  )
}

const SecondImage = ({
  id,
  secondImg,
  title
}: {
  id: number
  secondImg: string
  title: string
}) => {
  return (
    <div
      className={`absolute right-0 -bottom-5 ${
        id === 5 ? 'w-full opacity-80' : ''
      }`}
    >
      <Image
        src={`${secondImg}`}
        fill
        alt={title}
        className='object-cover object-center h-full w-full'
      />
    </div>
  )
}

const CardContent = ({
  titleClassName,
  title,
  description,
  children
}: {
  titleClassName?: string
  title: string
  description: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        titleClassName,
        `group-hover/bento:translate-x-2 transition duration-200
          relative
          overflow-hidden
          h-full min-h-40 lg:min-h-60
          flex flex-col
          px-5 
          p-5 lg:p-10
          w-full
        `
      )}
    >
      <div className='max-[412px]:hidden lg:hidden xl:block font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base'>
        {description}
      </div>
      <div className='z-10 max-[412px]:max-w-52 font-sans font-bold text-lg lg:text-xl xl:text-2xl max-w-96'>
        {title}
      </div>

      {children}
    </div>
  )
}

const LastCardAnimation = () => {
  return (
    <div className='absolute inset-0 rounded-3xl overflow-hidden'>
      <BgGradientAnimation />
    </div>
  )
}
