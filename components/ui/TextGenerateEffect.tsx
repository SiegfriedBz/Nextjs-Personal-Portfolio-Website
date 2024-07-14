'use client'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '@/utils/cn'

export const TextGenerateEffect = ({
  words,
  className
}: {
  words: string
  className?: string
}) => {
  const [scope, animate] = useAnimate()
  let wordsArray = words.split(' ')
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1
      },
      {
        duration: 2,
        delay: stagger(0.2)
      }
    )
  }, [scope, animate])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isPurpleText = (idx > 6 && idx < 10) || idx > 11
          return (
            <motion.span
              key={word + idx}
              className={`opacity-0 ${
                isPurpleText ? 'text-purple' : 'dark:text-white text-black'
              }
               `}
            >
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('font-bold', className)}>
      <div className='my-4'>
        <div className=' dark:text-white text-black leading-snug tracking-wide'>
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
