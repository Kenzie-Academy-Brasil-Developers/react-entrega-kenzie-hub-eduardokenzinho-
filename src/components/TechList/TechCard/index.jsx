import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import styles from "./style.module.scss";
import { useContext } from "react";
import { TecnologiesContext } from "../../../providers/TecnologiesContext";
import { EditTechModal } from "../../modals/EditTechModal/index";

export const TechCard = ({ isOpen, setIsOpen }) => {
    const {
        modalCreate,
        setModalCreate,
        setModalEdit,
        modalEdit,
        setTechList,
        techList,
        editTech,
        deleteTech,
        newTech,
    } = useContext(TecnologiesContext);

    return (
        <>
            {techList?.map((tech) => (
                <li className={styles.card} key={tech.id}>
                    <div><h2 className="font title2">{tech.title}</h2></div>
                    <div className={styles.handle}>
                        <p className="font headlineBold">{tech.status}</p>
                        <div className={styles.icons}>
                            <div>
                                <BsFillTrashFill
                                    onClick={() => deleteTech(tech.id)}
                                    size={28}
                                    color="white"
                                />
                            </div>
                            <div>
                                <div onClick={() => setIsOpen(true)}> <FiEdit2 size={28}
                                    color="white"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}

            <p> {techList?.id} </p>
            <p> {TecnologiesContext.status} </p>
            
            {isOpen ? <EditTechModal setIsOpen={setIsOpen} /> : null} 
        </>
    );
};
