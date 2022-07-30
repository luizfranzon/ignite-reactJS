import { useState } from "react";

import { Header } from "./components/Header"
import { CreatedTasks } from "./components/CreatedTasks";
import { Task } from "./components/Task"

import { PlusCircle } from "phosphor-react"

import styles from "./App.module.css"

export function App() {

    const [taskList, setTaskList] = useState([])
    const [inputTaskName, setInputTaskName] = useState()

    const [createdTasks, setCreatedTasks] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);

    function handleCreateTask() {
        let newTask = inputTaskName;
        setTaskList(prevState => [...prevState, newTask])
    }

    return (
        <div>
            <Header />
            <div className={styles.inputBox}>
                <input onChange={e => setInputTaskName(e.target.value)} className={styles.input} type="text" placeholder="Adicione uma nova tarefa" />
                <button onClick={handleCreateTask} className={styles.button} >Criar <PlusCircle size={20} color="#ffffff" /> </button>
            </div>
            <CreatedTasks />
        </div>
    );
}
