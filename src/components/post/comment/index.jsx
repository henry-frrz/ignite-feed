import * as Icon from '@phosphor-icons/react'

import styles from './styles.module.css'
import { Avatar } from '../../index'

export const Comment = () => {
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

            <Icon.Trash className={styles['comment__remove-btn']} />
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <button className={styles['comment__like']}>
          <Icon.ThumbsUp /> <span>03</span>
        </button>
      </div>
    </li>
  )
}
