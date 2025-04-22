import styles from './styles.module.css'

import isotype from '../../assets/isotype.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles["header__logo-link"]} href='/'>
        <img
          className={styles["header__logo-img"]}
          src={isotype}
          alt='Ícone - Logo Ignite Feed'
        />
        Ignite Feed
      </a>
    </header>
  )
}
