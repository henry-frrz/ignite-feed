import { Avatar, Comment } from '../index'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import styles from './styles.module.css'

export const Post = ({ author, content, publishedAt }) => {
  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' MMMM 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <section id={styles.post}>
      <header className={styles.post__header}>
        <a className={styles.post__author}>
          <Avatar src={author.avatarURL} />

          <div className={styles['post__author-info']}>
            <strong className={styles['post__author-name']}>
              {author.name}
            </strong>
            <span className={styles['post__author-role']}>{author.role}</span>
          </div>
        </a>

        <time
          className={styles.post__time}
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormatted}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <p style={{ whiteSpace: 'pre-wrap' }} className={styles.post__content}>
        {content}
      </p>

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
