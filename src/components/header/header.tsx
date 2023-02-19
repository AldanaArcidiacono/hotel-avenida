import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header__container}>
            <h1 className={styles.header__title}>Hotel Avenida</h1>
            <button className={styles.header__book_now}>Reserva ahora</button>
        </header>
    );
}
