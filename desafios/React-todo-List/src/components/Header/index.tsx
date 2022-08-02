import logo from "../../assets/logo.svg"

import styles from "./Header.module.css"

import { PlusCircle } from "phosphor-react"
import { Tasks } from "../Tasks"
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
    onAddTask: (taskContent: string) => void;
}

export function Header({ onAddTask }: Props) {

    const [content, setContent] = useState("")

    function handleSubmit(event: FormEvent) {
        event.preventDefault()  
        onAddTask(content)
        setContent("")
    }

    function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
        setContent(event.target.value)
    }

    return (
        <header className={styles.header}>
            <img src={logo} alt="" />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input type="text" placeholder="Adicione uma nova tarefa" onChange={onChangeContent} value={content} />
                <button>
                    Criar
                    <PlusCircle size={24}/>
                </button>
            </form>
        </header>
    )
}