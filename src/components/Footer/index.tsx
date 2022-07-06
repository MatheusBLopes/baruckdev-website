import styles from './styles.module.scss'

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <p>&copy; {new Date().getFullYear()} Matheus Bachiste Lopes. All Rights Reserved.</p>
        </footer>
    )
}