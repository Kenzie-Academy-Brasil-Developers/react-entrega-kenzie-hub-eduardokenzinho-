import { useForm } from "react-hook-form";
import styles from "./style.module.scss";
import { toast } from "react-toastify";
import { Input } from "../../Input/index";
import { useContext } from "react";
import { TecnologiesContext } from "../../../providers/TecnologiesContext";

export const EditTechModal = ({ setIsOpen }) => {
    const { register, handleSubmit } = useForm();

    const { editTech, setModalEdit, techList } = useContext(TecnologiesContext);

    const submit = (formata) => {
        editTech(formata);
    };

    return (
        <>
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
                                disabled
                                type="text"
                                placeholder="testee"
                            />
                        </div>
                        <div className={styles.input__container}>
                            <div className={styles.input__select}>
                                <div>
                                    <label>Status</label>
                                </div>
                                <select
                                    {...register("status")} name="status"
                                    className={styles.select}
                                >
                                    <option value="Iniciante">Iniciante</option>
                                    <option value="Intermediário">
                                        Intermediário
                                    </option>
                                    <option value="Avançado">Avançado</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.submit}>
                            <button>Editar Tecnologia</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
