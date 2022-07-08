import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Post/Post"

import styles from "./App.module.css"

import "./global.css"

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/ignys.png",
            name: "Danolo",
            role: "Web Developer"
        },
        content: [
            { type: 'paragraph', content: "Fala galeraa 👋"},
            { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
            { type: 'link', content: "jane.design/doctorcare"}
        ],
        publishedAt: new Date('2022-05-03 20:14:41')
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/diego3g.png",
            name: "Diego Fernandes",
            role: "CTO @Rocketseat"
        },
        content: [
            { type: 'paragraph', content: "Fala galeraa 👋"},
            { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
            { type: 'link', content: "jane.design/doctorcare"}
        ],
        publishedAt: new Date('2022-05-10 22:32:14')
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
