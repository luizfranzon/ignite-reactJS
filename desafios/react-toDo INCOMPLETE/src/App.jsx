import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

import { Header } from "./components/Header";
import { Task } from "./components/Task";

import { PlusCircle } from "phosphor-react";
import Clipboard from "./assets/Clipboard.svg";

import styles from "./App.module.css";
import styles1 from "./styles/CreatedTasks.module.css"


export function App() {
    const [taskList, setTaskList] = useState([]);
    const [inputTaskName, setInputTaskName] = useState("Não definido");

    function handleCreateTask() {

        let newTask = {
            id: uuidv4(),
            content: inputTaskName,
            isCompleted: true
        };

        setTaskList((prevState) => [...prevState, newTask]);
    }

    return (
        <div>
            <Header />
            <div className={styles.inputBox}>
                <input
                    onChange={(e) => setInputTaskName(e.target.value)}
                    className={styles.input}
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                />
                <button onClick={handleCreateTask} className={styles.button}>
                    Criar <PlusCircle size={20} color="#ffffff" />
                </button>
            </div>
            <main className={styles1.main}>
            <header className={styles1.header}>
                <div className={styles1.headerSpanBox}>
                    <span className={styles1.createdTasksSpan}>
                        Tarefas criadas
                    </span>
                    <span className={styles1.createdTasksNumber}>0</span>
                </div>
                <div className={styles1.headerSpanBox}>
                    <span className={styles1.completedTasksSpan}>
                        Concluídas
                    </span>
                    <span className={styles1.completedTasksNumber}>0</span>
                </div>
            </header>
            <div className={styles1.taskDiv}>
                <div className={styles.createdTaskDiv}>
                {
                        taskList.map(task => {
                            return (
                                <Task key={task.id} content={task.content} />
                                )
                        })
                    }
                </div>
            </div>
        </main>
        </div>
    );
}
