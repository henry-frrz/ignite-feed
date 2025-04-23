import styles from './styles.module.css'

export const Avatar = ({ border = true, src }) => {
  return (
    <img
      className={border ? styles['avatar--border'] : styles.avatar}
      src={src}
      alt='Avatar'
    />
  )
}
