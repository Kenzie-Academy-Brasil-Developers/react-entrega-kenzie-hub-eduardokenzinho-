import { RegisterForm } from "../../components/forms/RegisterForm";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export const RegisterPage = () => {
    return (
        <main>
            <header>
                <div className={styles.header_container}>
                    <h1 className={styles.title__login}>Kenzie hub</h1>
                    <button>
                        <Link to="/">voltar</Link>
                    </button>
                </div>
            </header>
            <RegisterForm />
        </main>
    );
};

