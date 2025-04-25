import { Avatar, Comment } from '../index'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import styles from './styles.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface AuthorProps {
  avatarURL: string
  name: string
  role: string
}

export interface PostType {
  id: number
  author: AuthorProps
  content: string
  publishedAt: Date
}

interface PostProps {
  post: PostType
}

export const Post = ({ post }: PostProps) => {
  const { publishedAt, author, content } = post

  const [comments, setComments] = useState<string[]>([])
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

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('')

    setNewCommentText(event.target.value)
  }

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  const handleNewCommentInvalid = (
    event: InvalidEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const deleteComment = (commentToDelete: string) => {
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
