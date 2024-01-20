import styles from "./style.module.scss";
import { UserContext } from "../../../providers/index";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TecnologiesContext } from "../../../providers/TecnologiesContext";

export const CreateTechModal = ({ setIsOpen }) => {
    const { register, handleSubmit } = useForm();

    const { newTech } = useContext(TecnologiesContext);

    const submit = (formData) => {
        newTech(formData);
    };

    return (
        <div className={styles.modalOverlay} role="dialog">
            <div className={styles.modalBox}>
                <div className={styles.header__modal}>
                    <h3>Cadastrar tecnologia</h3>
                    <button onClick={() => setIsOpen(false)}>X</button>
                </div>

                <form onSubmit={handleSubmit(submit)}>
                    <div>
                        <label htmlFor="tech">Tecnologia</label>
                        <input
                            type="text"
                            placeholder="Digite a tecnologia"
                            {...register("title")}
                        />
                    </div>
                    <div className={styles.input__container}>
                        <div className={styles.input__select}>
                            <div>
                                <label>Selecionar status</label>
                            </div>
                            <select
                                value="status"
                                {...register("status")} className={styles.select}>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediario">Intermediário</option>
                                <option value="Avancado">Avançado</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.submit}>
                        <button>Cadastrar Tecnologia</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
