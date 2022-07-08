import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Post/Post"

import styles from "./App.module.css"

import "./global.css"

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/diego3g.png",
            name: "Diego Fernandes",
            role: "CTO @Rocketseat"
        },
        content: [
            { type: 'paragraph', content: "Fala galera 👋"},
            { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
            { type: 'link', content: "jane.design/doctorcare"}
        ],
        publishedAt: new Date('2022-07-08 08:13:41')
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/ignys.png",
            name: "danielcs",
            role: "Professional CSGO Player"
        },
        content: [
            { type: 'paragraph', content: "Seguinte rapaziada!"},
            { type: 'paragraph', content: "Vocês não tem ideia no clutch que eu ganhei aqui... eu sou muito bom meu deus"},
            { type: 'link', content: "youtube.com/watch?v=FFESGKu-b7w"}
        ],
        publishedAt: new Date('2022-07-08 15:14:41')
    },
]

export function App() {

    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return (<Post 
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />)
                    })}
                </main>
            </div>
        </div>
    )
}
