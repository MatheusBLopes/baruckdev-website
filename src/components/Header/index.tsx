import { ActiveLink } from '../ActiveLink'

import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <strong>baruckdev</strong>
                <nav>
                    <ActiveLink
                        href="/"
                        activeClassName={styles.active}>
                            <a>Home</a>
                    </ActiveLink>
                </nav>
            </div>
        </header>
    )
}