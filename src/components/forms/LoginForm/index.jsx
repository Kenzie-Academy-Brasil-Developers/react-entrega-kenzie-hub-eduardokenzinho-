import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./style.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { rulesLoign } from "./rulesLoign";
import { Input } from "../../Input";
import { InputPassword } from "../../ImputPassword";
import { useUserContext } from "../../../providers/index";

export const LoginForm = () => {
   const { register, handleSubmit, formState: { errors },} = useForm({ resolver: zodResolver(rulesLoign),});

   const { userLogin } = useUserContext();

   const submit = (formData) => {
      userLogin(formData);
   };

   return (
      <main>
            <ToastContainer/>
            <form onSubmit={handleSubmit(submit)} className={styles.form__login}>
               <div className={styles.title__container}>
                  <h2 className={styles.title__form}>Login</h2>
               </div>

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

               <button className={styles.btn__login} type="submit">
                  <p>Entrar</p>
               </button>

               <p className={styles.ask}>Ainda não possui uma conta?</p>

               <button className={styles.btn__register}>
                  <Link to="/register">cadastre-se</Link>
               </button>
            </form>
      </main>
   );
};
