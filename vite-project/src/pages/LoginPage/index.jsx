import { LoginForm } from "../../components/forms/LoginForm";
import styles from "./style.module.scss";

export const LoginPage = ({ user, setUser }) => {
    return (
        <>
            <main>
                <header className={styles.header}>
                    <div>
                        <h1 className={styles.title__login}>Kenzie hub</h1>
                    </div>
                </header>
                <div className="div__form">
                    <LoginForm user={user} setUser={setUser} />
                </div>
            </main>
        </>
    );
};
