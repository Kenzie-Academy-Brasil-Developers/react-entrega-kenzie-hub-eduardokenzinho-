import React, { createContext, useState, useContext } from "react"; // Importando useContext
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import {
    useMutation,
    useQuery,
    useQueryClient,
    QueryClientProvider,
} from "react-query";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [techList, setTechList] = useState([]);

    const navigate = useNavigate();
    const token = localStorage.getItem("@TOKEN");

    useEffect(() => {
        const loadUser = async () => {
            if (token) {
                try {
                    const { data } = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUser(data);
                    setTechList(data.techs);
                } catch (error) {
                    toast.error("Erro ao fazer login automático");
                    navigate("/");
                }
            }
        };
        loadUser();
    }, []);

    const {
        isLoading,
        isError,
        data: dataProfile,
    } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const response =
                token &&
                (await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }));
            return response;
        },
    });

    const userRegister = async (formData) => {
        try {
            await api.post("/users", formData);
            toast.success("Cadastro Feito com sucesso!");
            navigate("/");
        } catch (error) {
            toast.error("Erro ao fazer cadastro.");
            console.log(error);
        }
    };

    const userLogin = async (formData) => {
        try {
            await api.post("/sessions", formData).then((response) => {
                const token = response.data.token;
                const userid = response.data.user.id;
                localStorage.setItem("@TOKEN", token);
                localStorage.setItem("@USERID", userid);
                const userData = response.data.user;
                setUser(userData);
                setTechList(userData.techs);
            });
            toast.success("Login bem-sucedido!");
            navigate("/dashboard");
        } catch (error) {
            toast.error("Email ou senhas inválidos");
        }
    };

    const userLogout = () => {
        localStorage.removeItem("@TOKEN");
        setUser(null);
        navigate("/");
    };

    return (
        <UserContext.Provider
            value={{
                user,
                userRegister,
                userLogin,
                userLogout,
                techList,
                setTechList,
            }}
        >
            <ToastContainer />
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
