import Clipboard from "../../assets/Clipboard.svg";

import styles from "./CreatedTasks.module.css";

export function CreatedTasks() {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className={styles.headerSpanBox}>
                    <span className={styles.createdTasksSpan} >Tarefas criadas</span>
                    <span className={styles.createdTasksNumber} >0</span>
                </div>
                <div className={styles.headerSpanBox}>
                    <span className={styles.completedTasksSpan} >Concluídas</span>
                    <span className={styles.completedTasksNumber} >0</span>
                </div>
            </header>
            <div className={styles.taskDiv}>
                <img src={Clipboard} alt="" />
                <span>
                    <strong>Você ainda não tem tarefas cadastradas</strong> <br />
                    Crie tarefas e organize seus itens a fazer
                </span>
            </div>
        </main>
    );
}
