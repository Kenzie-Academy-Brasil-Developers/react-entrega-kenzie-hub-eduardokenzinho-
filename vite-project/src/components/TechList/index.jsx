import { BsPlusLg } from "react-icons/bs";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss";
import { useContext, useState } from "react";
import { TecnologiesContext } from "../../providers/TecnologiesContext";
export const TechList = () => {
    const { setModalCreate } = useContext(TecnologiesContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <ul className={styles.list}>
                    <TechCard isOpen={isOpen} setIsOpen={setIsOpen} />
                </ul>
            </div>
        </div>
    );
};