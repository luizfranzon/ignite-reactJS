import { Header } from "./components/Header/Header"
import { Post } from "./Post"

import styles from "./App.module.css"

import "./global.css"
import { Sidebar } from "./components/Sidebar/Sidebar"

export function App() {

    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post
                        author="Luiz"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <Post
                        author="Carlos"
                        content="Melhor post do mundo "
                    />
                </main>
            </div>
        </div>
    )
}
