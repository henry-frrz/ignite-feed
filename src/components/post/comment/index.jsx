import * as Icon from '@phosphor-icons/react'

import styles from './styles.module.css'
import { Avatar } from '../../index'
import { useState } from 'react'

export const Comment = ({ content, onDeleteComment }) => {
  const handleDeleteComment = () => {
    onDeleteComment(content)
  }
  const [likeCount, setLikeCount] = useState(0)

  const handleAddLike = () => {
    setLikeCount(state => state + 1)
  }

  return (
    <li id={styles.comment}>
      <a className={styles['comment__author-avatar-link']} href=''>
        <Avatar border={false} src='https://github.com/henry-frrz.png' />
      </a>

      <div className={styles['comment__wrapper']}>
        <div className={styles['comment__content']}>
          <header className={styles['comment__header']}>
            <a className={styles['comment__info']}>
              <strong className={styles['comment__author-name']}>
                Henrique Ferraz
              </strong>

              <time
                className={styles['comment__time']}
                dateTime='14-04-2025 10:15:39'
                title='14 de Abril às 10:16h'
              >
                Cerca de 2h
              </time>
            </a>

            <Icon.Trash
              className={styles['comment__remove-btn']}
              onClick={handleDeleteComment}
            />
          </header>

          <p>{content}</p>
        </div>

        <button className={styles['comment__like']} onClick={handleAddLike}>
          <Icon.ThumbsUp /> <span>{likeCount}</span>
        </button>
      </div>
    </li>
  )
}
