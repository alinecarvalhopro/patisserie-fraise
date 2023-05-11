import * as schemas from "../../../schemas";
import { useUserContext } from "../../../providers/UserContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../fragments/Input";
import { Link } from "react-router-dom";
import { StyledDiv } from "./style";

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
  } = useForm<ILoginFormData>({
    resolver: zodResolver(schemas.loginSchema),
  });

  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    submitLogin(formData);
  };

  return (
    <StyledDiv>
      <h2>Acesse nosso menu</h2>
      <div className={"boxForm"}>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            id="email"
            label="Login"
            error={errors.email?.message}
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          <Input
            id="password"
            label="Senha"
            error={errors.password?.message}
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Entrando" : "Entrar"}
          </button>
        </form>
        <p>ou</p>
        <Link to="/register">Cadastrar-se</Link>
      </div>
    </StyledDiv>
  );
};
