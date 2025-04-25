import { ImgHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  border?: boolean
}

export const Avatar = ({ border = true, ...rest }: AvatarProps) => {
  return (
    <img
      className={border ? styles['avatar--border'] : styles.avatar}
      alt='Avatar'
      {...rest}
    />
  )
}
