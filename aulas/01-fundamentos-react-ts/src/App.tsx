import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar.tsx";
import { Post, PostType } from "./components/Post";

import './global.css'

import styles from "./App.module.css"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/luizfranzon.png",
      name: "Luiz Franzon",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: 'link', content: "jane.design/doctorcare" },
      { type: 'link', content: "#novoprojeto #nlw #rocketseat" },
    ],
    publishedAt: new Date('2023-09-25 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/ignys.png",
      name: "Daniel Frizzatti",
      role: "Professional CS:GO Player"
    },
    content: [
      { type: 'paragraph', content: "Eae rapazeada" },
      { type: 'paragraph', content: "Acabei de postar mais um clutch! PAI TA ON FAMILIA! 😎😎" },
      { type: 'link', content: "twitch.tv/ignys/clips/112163513" },
      { type: 'link', content: "#nãotemcomo #gamersclub #familia" },
    ],
    publishedAt: new Date('2023-09-30 20:00:00')
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}
