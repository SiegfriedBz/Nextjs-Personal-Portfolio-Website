import { Button } from '@/components/ui/MovingBorder'
import { WORK_EXPERIENCE } from '@/constants.ts'
import Image from 'next/image'

type TData = {
  id: number
  title: string
  description: string
  className: string
  thumbnail: string
}

type TProps = {
  data: TData[]
  children: React.ReactNode
}
const Experience = ({ data, children }: TProps) => {
  return (
    <>
      <h1 className='heading'>
        My
        <span className='text-purple'> work experience</span>
      </h1>

      <div className='w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10'>
        {WORK_EXPERIENCE.map((experience) => {
          const { id, title, description, className, thumbnail } = experience

          return (
            <Button
              key={id}
              borderRadius='1.75rem'
              duration={Math.floor(Math.random() * 7500 + 10000)}
              className='flex-1 text-white border-neutral-200 dark:border-slate-800'
            >
              <div className='flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                <div className='relative lg:w-24 md:w-16 w-12 lg:h-24 md:h-16 h-12 overflow-hidden'>
                  <Image
                    src={thumbnail}
                    fill
                    alt={title}
                    className='object-contain'
                  />
                </div>

                <div className='lg:ms-5'>
                  <h1 className='text-start text-xl md:text-2xl font-bold'>
                    {title}
                  </h1>
                  <p className='text-start text-white-100 mt-3 font-semibold'>
                    {description}
                  </p>
                </div>
              </div>
            </Button>
          )
        })}
      </div>
    </>
  )
}

export default Experience
