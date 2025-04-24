import { Avatar, Comment } from '../index'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import styles from './styles.module.css'
import { useState } from 'react'

export const Post = ({ author, content, publishedAt }) => {
  const [comments, setComments] = useState(['Post muito bacana!!'])
  const [newCommentText, setNewCommentText] = useState('')

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

  const handleNewCommentChange = () => {
    event.target.setCustomValidity('')

    setNewCommentText(event.target.value)
  }

  const handleCreateNewComment = () => {
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  const handleNewCommentInvalid = () => {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const deleteComment = commentToDelete => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

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

      <form
        className={styles['post__comment-form']}
        onSubmit={handleCreateNewComment}
      >
        <strong className={styles['comment-form__title']}>
          Deixe seu feedback
        </strong>

        <textarea
          onChange={handleNewCommentChange}
          value={newCommentText}
          className={styles['comment-form__textarea']}
          placeholder='Escreva um comentário...'
          onInvalid={handleNewCommentInvalid}
          required
        />

        <button
          className={styles['comment-form__submit-btn']}
          type='submit'
          disabled={isNewCommentEmpty}
        >
          Publicar
        </button>
      </form>

      <ul className={styles['post__comments']}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </ul>
    </section>
  )
}
