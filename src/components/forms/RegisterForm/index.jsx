import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodRules } from "../zodRules/index";
import { useState } from "react";
import styles from "./style.module.scss";
import { api } from "../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { Input } from "../../Input";
import { InputPassword } from "../../ImputPassword";
import { useUserContext } from "../../../providers/index";


export const RegisterForm = () => {

   const { userRegister } = useUserContext();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(zodRules),
   });


   const submit = (formData) => {
      userRegister(formData);
   };

   return (
      <form className={styles.register__form} onSubmit={handleSubmit(submit)}>
            <ToastContainer />
            <div className={styles.title__container}>
               <h1>Crie sua conta</h1>
               <p>Rápido e grátis, vamos nessa</p>
            </div>

            <Input
               label="Nome"
               name="name"
               type="text"
               register={register("name")}
               error={errors.name}
               placeholder="Digite seu nome"
            />

            <Input
               label="Email"
               name="email"
               type="text"
               register={register("email")}
               error={errors.email}
               placeholder="Digite seu email"
            />

            <InputPassword
                  label="Senha"
                  name="senha"
                  register={register("password")}
                  error={errors.password}
                  placeholder="Digite sua senha"
               />

            <InputPassword
                  label="Confirme a senha"
                  name="senha"
                  register={register("confirmPassword")}
                  error={errors.confirmPassword}
                  placeholder="Confirme sua senha"
               />

            <Input
               label="Bio"
               name="contact"
               type="text"
               placeholder="Fale sobre você."
               register={register("bio")}
               error={errors.bio}
            />

            <Input
               label="Contato"
               name="contact"
               type="text"
               placeholder="Contato"
               register={register("contact")}
               error={errors.contact}
            />

            <div className={styles.select}>
               <label >
                  Selecionar Módulo
               </label>
               <select
                  name="course_module"
                  error={errors.course_module}
                  {...register("course_module")}
               >
                  <option value="Primeiro módulo (Introdução ao Frontend)">
                        Primeiro Módulo
                  </option>
                  <option value="Segundo Módulo (Frontend avançado)">
                        Segundo Módulo
                  </option>
                  <option value="Terceiro módulo (Introdução ao Backend)">
                        Terceiro Módulo
                  </option>
                  <option value="Quarto módulo (Backend Avançado)">
                        Quarto Módulo
                  </option>
               </select>
            </div>
            <div className={styles.btn__register}>
               <button className={styles.btn__register}>Cadastrar</button>
            </div>
      </form>
   );
};
