import React, { createContext, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from ".";

export const TecnologiesContext = createContext({});

export const TecnologiesProvider = ({ children }) => {
    const [modalCreate, setModalCreate] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);

    const { techList, setTechList } = useContext(UserContext);

    const token = localStorage.getItem("@TOKEN");

    const newTech = async (formData) => {
        console.log(formData);
        try {
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Tecnologia criada com sucesso!");
            setTechList((techList) => [...techList, data]);
            setModalCreate(false);
        } catch (error) {
            console.error(error);
            toast.error("Tecnologia ja cadastrada!");
        }
    };

    const deleteTech = async (techListId) => {
        try {
            const response = await api.delete(`/users/techs/${techListId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const newTechList = techList.filter(
                (tech) => tech.id !== techListId
            );
            setTechList(newTechList);
            toast.success("Tecnologia excluída com sucesso!");
        } catch (error) {
            console.error(error);
            toast.error("Erro ao excluir Tecnologia!");
        }
    };

    const editTech = async (formData) => {
        try {
            const response = await api.put(
                `/users/techs/${techList.id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setTechList((techList) => [...techList, response]);
            setModalEdit(false);
            toast.success("Tenologia editada com sucesso!");
        } catch (error) {
            console.error(error);
            toast.error("Erro ao editar Tecnologia!");
        }
    };

    return (
        <TecnologiesContext.Provider
            value={{
                modalCreate,
                setModalCreate,
                setModalEdit,
                modalEdit,
                setTechList,
                techList,
                editTech,
                deleteTech,
                newTech,
            }}
        >
            {children}
            <ToastContainer />
        </TecnologiesContext.Provider>
    );
};
