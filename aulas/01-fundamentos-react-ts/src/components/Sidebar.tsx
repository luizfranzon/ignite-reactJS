import { Avatar } from "./Avatar"
import styles from "./Sidebar.module.css"

import { PencilSimpleLine } from "phosphor-react"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img className={styles.cover} src="https://images.unsplash.com/photo-1633226340451-29bcbe324dd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/luizfranzon.png" />
        <strong>Luiz Fernando</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}