import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from "../Avatar/Avatar"
import { Comment } from "../Comment/Comment"

import styles from "./Post.module.css"

export function Post({ author, publishedAt, content }) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true   
    })

    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/ignys.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong >Danolo</strong>
                        <span >Web Developer</span>

                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Escreva um comentário"/>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}