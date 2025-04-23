import { Comment } from '../index'

import styles from './styles.module.css'

export const Post = () => {
  return (
    <section id={styles.post}>
      <header className={styles.post__header}>
        <a className={styles.post__author}>
          <img
            className={styles['post__author-avatar']}
            src='https://github.com/henry-frrz.png'
            alt='Avatar'
          />

          <div className={styles['post__author-info']}>
            <strong className={styles['post__author-name']}>
              Henrique Ferraz
            </strong>
            <span className={styles['post__author-role']}>Web Developer</span>
          </div>
        </a>

        <time
          className={styles.post__time}
          dateTime='14-04-2025 10:15:39'
          title='14 de Abril às 10:16h'
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.post__content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <a className={styles.post__link} href=''>
          👉 jane.design/doctorcare
        </a>

        <a className={styles.post__hashtag} href=''>
          #novoprojeto #nlw #rocketseat
        </a>
      </div>

      <form className={styles['post__comment-form']}>
        <strong className={styles['comment-form__title']}>
          Deixe seu feedback
        </strong>

        <textarea
          className={styles['comment-form__textarea']}
          placeholder='Escreva um comentário...'
        />

        <button className={styles['comment-form__submit-btn']} type='submit'>
          Publicar
        </button>
      </form>

      <ul className={styles['post__comments']}>
        <Comment />
      </ul>
    </section>
  )
}
