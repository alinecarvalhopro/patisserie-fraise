import * as schemas from "../../../schemas";
import { useUserContext } from "../../../providers/UserContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../fragments/Input";
import { Link } from "react-router-dom";

export interface ILoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { submitLogin } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm <
  ILoginFormData >
  ({
    resolver: zodResolver(schemas.loginSchema),
  });

  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    submitLogin(formData);
  };

  return (
    <>
    <form onSubmit={handleSubmit(submit)}>
      <Input
        id="email"
        label="login"
        error={errors.email?.message}
        type="email"
        {...register("email")}
      />
      <Input
        id="password"
        label="Senha"
        error={errors.password?.message}
        type="password"
        {...register("password")}
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Entrando" : "Entrar"}
      </button>
    </form>
    <Link to="/register">Cadastrar-se</Link>
    </>
  );
};
