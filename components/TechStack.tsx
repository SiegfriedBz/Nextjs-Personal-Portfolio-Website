import React from 'react'

const TechStack = () => {
  return (
    <div className='flex h-full py-2 gap-1 lg:gap-5 w-fit absolute right-2 md:right-2 lg:right-2'>
      <Stack stack={['React.js', 'Next.js', 'Tailwind']} />
      <Stack stack={['Node.js', 'Express.js', 'TypeScript']} order='reverse' />
    </div>
  )
}

export default TechStack

const Stack = ({
  stack,
  order = ''
}: {
  stack: string[]
  order?: '' | 'reverse'
}) => {
  const isReverse = order === 'reverse'

  return (
    <div
      className={`flex h-full gap-y-2 ${
        isReverse ? 'flex-col-reverse' : 'flex-col'
      } justify-between`}
    >
      {stack.map((tech, index) => {
        return (
          <span
            key={`${index}-${tech}`}
            className='
              py-2 lg:py-3 px-3
              text-xs lg:text-sm 
              opacity-50 lg:opacity-100 
              rounded-lg
              text-center

              bg-[#10132E]
            '
          >
            {tech}
          </span>
        )
      })}
      <span
        className={`relative py-3 px-3 rounded-lg text-center bg-[#10132E]`}
      ></span>
    </div>
  )
}
