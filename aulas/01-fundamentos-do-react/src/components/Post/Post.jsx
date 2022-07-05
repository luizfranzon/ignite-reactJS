import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/luizfranzon.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong >Luiz Franzon</strong>
                        <span >Web Developer</span>

                    </div>
                </div>
                <time title="11 de Maio às 08:35h" dateTime="2022-05-11 08:35:51" >Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}