import * as Icon from '@phosphor-icons/react'

import styles from './styles.module.css'
import { Avatar } from '../index'

export const Profile = () => {
  return (
    <aside className={styles.profile}>
      <img
        className={styles.profile__background}
        src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=100'
        alt='Profile Thumbnail'
      />

      <a className={styles.profile__info}>
        <Avatar src='https://github.com/henry-frrz.png' />

        <strong className={styles['profile__info-name']}>
          Henrique Ferraz
        </strong>
        <span className={styles['profile__info-role']}>Web Developer</span>
      </a>

      <footer className={styles.profile__footer}>
        <a className={styles['profile__edit-btn']}>
          <Icon.PencilSimpleLine weight='bold' /> Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
