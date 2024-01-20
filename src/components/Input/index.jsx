import styles from "./style.module.scss";

export const Input = ({ label, name, type, placeholder, register, error }) => {
    return (
        <div className={styles.input__container}>
            <label htmlFor="email">{label}</label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                {...register}
            />
            {error ? <p className={styles.error}>{error.message}</p> : null}
        </div>
    );
};
