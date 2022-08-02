import rocketIcon from '../../assets/rocket.svg'
import styles from "./Header.module.css"

export function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}> 
                <img src={rocketIcon} alt=""/>to
                <span>do</span>
            </h1>
        </header>
    )
}