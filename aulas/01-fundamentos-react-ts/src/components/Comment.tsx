import { ThumbsUp, Trash } from "phosphor-react"

import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"

interface CommentProps {
  content: string;
  onDeleteComment: (comment: number) => void;
  commentId: number
}

export function Comment({ content, onDeleteComment, commentId }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(commentId)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/luizfranzon.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiz Fernando</strong>
              <time title="11 de Maio das 08h13" dateTime="2022/05/11 08:13:51">Publica há 1h</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}