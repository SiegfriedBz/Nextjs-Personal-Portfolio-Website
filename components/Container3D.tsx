import { PinContainer } from '@/components/ui/PinContainer'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa'
import getCldImages from '@/utils/getCldImages'

type TProps = {
  title: string
  description: string
  img: string
  iconLists?: string[]
  link: string
  cuteLink: string
  gitHubLink: string
}
export function Container3D({
  title,
  description,
  img,
  iconLists,
  link,
  cuteLink
}: TProps) {
  const { url, blurredUrl } = getCldImages(img)

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
          src={url}
          fill
          quality={100}
          placeholder='blur'
          blurDataURL={blurredUrl}
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

      <div className='flex w-full items-center mt-7 mb-3'>
        {/* icons */}
        <div className='flex items-center'>
          {iconLists &&
            iconLists?.map((icon, index) => {
              return (
                <div
                  key={icon}
                  className='flex items-center border border-white/[0.2] rounded-full
                    bg-black w-8 h-8 lg:w-10 lg:h-10'
                  style={{ transform: `translateX(-${10 * index}px)` }}
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
        <div className='ms-auto flex items-center gap-x-2 lg:text-xl md:text-xs text-sm'>
          <a target='_blank' href={link} className='whitespace-nowrap'>
            {cuteLink.includes('api') ? 'View in Postman' : 'Visit Live Site'}
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
