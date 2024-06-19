'use client'
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'

type TProps = {
  words: string
  className?: string
}
export const TextEffect = ({ words, className }: TProps) => {
  return <TextGenerateEffect words={words} className={className} />
}
