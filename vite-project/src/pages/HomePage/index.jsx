import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { useUserContext } from "../../providers/index";
import { AiFillPlusSquare } from "react-icons/ai";
import { createContext, useState } from "react";
import { CreateTechModal } from "../../components/modals/CreateTechModal";
import { TechList } from "../../components/TechList";


export const HomePage = () => {
    const { user, userLogout } = useUserContext();
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_container}>
                    <h1 className={styles.title__login}>Kenzie hub</h1>
                    <button onClick={userLogout}>
                        <Link to="/">Sair</Link>
                    </button>
                </div>
            </div>
            <main>
                <div className={styles.infoUser}>
                    <h3>{`Olá, ${user.name}! `}</h3>
                    <p>{`${user.course_module}`}</p>
                </div>
                <section>
                    <div className={styles.section__header}>
                        <h2>Tecnologias</h2>
                        <div
                            className={styles.showModal}
                            onClick={() => setIsOpen(true)}
                            >
                            <AiFillPlusSquare size={34} color="#212529" />
                        </div>
                        {isOpen ? (
                            <CreateTechModal setIsOpen={setIsOpen}  />
                            ) : null}
                    </div>
                    <div className={styles.techList}> 
                        <TechList />
                    </div> 
                </section>
            </main>
        </>
    );
};
