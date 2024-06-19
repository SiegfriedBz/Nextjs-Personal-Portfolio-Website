'use client'

type BaseProps = {
  className?: string
  otherClassNames?: string
  label: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

type ButtonProps = BaseProps & {
  as: 'button'
  handleClick?: () => void
  href?: undefined
}

type AnchorProps = BaseProps & {
  as: 'a'
  href?: string
  handleClick?: undefined
}

type TProps = ButtonProps | AnchorProps

export const ButtonMagicAs = ({
  as,
  handleClick,
  href,
  className,
  otherClassNames,
  icon,
  iconPosition = 'left',
  label
}: TProps) => {
  const As = as === 'button' ? 'button' : 'a'

  const props =
    as === 'button' ? { onClick: handleClick } : { href, target: '_blank' }

  return (
    <span className={`cursor-pointer ${className}`}>
      <As
        {...props}
        className={`${className} relative w-60 inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none`}
      >
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
        <span
          className={`inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl 
          ${icon ? 'gap-x-4' : ''}  ${otherClassNames}`}
        >
          {icon && iconPosition === 'left' && icon}
          <span className='whitespace-nowrap'>{label}</span>
          {icon && iconPosition === 'right' && icon}
        </span>
      </As>
    </span>
  )
}
