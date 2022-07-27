import { Header } from "./components/Header"
import { CreatedTasks } from "./components/CreatedTasks";

import { PlusCircle } from "phosphor-react"

import styles from "./App.module.css"

export function App() {
    return (
        <div>
            <Header />
            <div className={styles.inputBox}>
                <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa" />
                <button className={styles.button} >Criar <PlusCircle size={20} color="#ffffff" /> </button>
            </div>
            <CreatedTasks />
        </div>
    );
}
