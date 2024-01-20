import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import styles from "./style.module.scss";

export const InputPassword = ({ label, register, placeholder, error }) => {
    const [IsHidden, setIsHidden] = useState(true);

    return (
        <>
            <div className={styles.input__container}>
                <label>
                    {label}
                    <input
                        type={IsHidden ? "password" : "text"}
                        {...register}
                        placeholder={placeholder}
                    />
                </label>
                {error ? (
                    <span className={styles.error}>{error.message}</span>
                ) : null}
                <button className={styles.btn} type="button" onClick={() => setIsHidden(!IsHidden)}>
                    {IsHidden ? <MdVisibility color="white" /> : <MdVisibilityOff color="white" />}
                </button>
            </div>
        </>
    );
};
