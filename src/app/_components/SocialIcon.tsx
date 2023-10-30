import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  url: string,
}>

export default function SocialIcon({ children, url }: Props) {
  return <a href={url} target='_blank' className='no-underline'>{children}</a>
}
