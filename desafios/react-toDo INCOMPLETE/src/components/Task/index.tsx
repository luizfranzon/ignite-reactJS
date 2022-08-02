import styles from "./Task.module.css"
import { Trash } from "phosphor-react"

export function Task({id, content, isCompleted }) {
    return (
        <div className={styles.taskBox}>
            <input type="checkbox" checked={isCompleted}/>
            <p>{content}</p>
            <Trash size={24} color="#808080"/>
        </div>
    )
}