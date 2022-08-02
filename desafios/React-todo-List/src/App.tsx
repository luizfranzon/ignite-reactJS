import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";

import "./styles/global.css";

const LOCAL_STORAGE_KEY = "todo:savedTasks"

export interface ITask {
    id: string;
    content: string;
    isCompleted: boolean;
}

export function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);

    function loadSavedTasks() {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (saved) {
            setTasks(JSON.parse(saved))
        }
    }

    useEffect(() => {
        loadSavedTasks()
    }, [])

    function setTasksAndSave(newTask: ITask[]) {
        setTasks(newTask)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask))
    }

    function handleCreateTask(taskContent: string) {
        setTasksAndSave([
            ...tasks,
            {
                id: uuidv4(),
                content: taskContent,
                isCompleted: false
            }
        ])
    }

    function deleteTaskById(taskId: string) {
        const newTasks = tasks.filter(task => task.id !== taskId)
        setTasksAndSave(newTasks)
    }

    function toggleTaskCompletedById(taskId: string) {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted
                }
            }
            return task;
        })
        setTasksAndSave(newTasks)
    }

    return (
        <div>
            <Header onAddTask={handleCreateTask} />
            <Tasks tasks={tasks} onDelete={deleteTaskById} onComplete={toggleTaskCompletedById} />
        </div>
    );
}
