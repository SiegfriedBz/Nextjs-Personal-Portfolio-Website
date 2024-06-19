'use client'

import { ButtonMagicAs } from '@/components/ui/ButtonMagicAs'
import { FaLocationArrow } from 'react-icons/fa'

const ShowMyWorkButton = () => {
  const handleClick = () => {
    // TODO
    console.log('CLICK ShowMyWorkButton')
  }

  return (
    <a href='#about'>
      <ButtonMagicAs
        as='button'
        handleClick={() => handleClick()}
        className='flex justify-center max-md:-mt-8 md:-mt-8'
        otherClassNames='w-80'
        label='Show my work'
        icon={<FaLocationArrow />}
        iconPosition='right'
      />
    </a>
  )
}

export default ShowMyWorkButton
