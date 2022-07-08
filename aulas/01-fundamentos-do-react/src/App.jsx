import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Post/Post"

import styles from "./App.module.css"

import "./global.css"

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
