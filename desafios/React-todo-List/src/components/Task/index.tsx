import styles from "./Task.module.css";
import { Check, Trash } from "phosphor-react"
import { ITask } from "../../App";

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <div className={styles.checked}><Check color="var(--gray-100)"/></div>  : <div className={styles.notChecked} />}
            </button>

            <p className={task.isCompleted ? styles.taskCompletedText : ""}>
                {task.content}
            </p>

            <button onClick={() => onDelete(task.id)} className={styles.button}><Trash className={styles.buttonIcon} size={24}/></button>
        </div>
    );
}
