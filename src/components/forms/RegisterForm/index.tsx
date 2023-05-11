import { useState } from "react";
import { useUserContext } from "../../../providers/UserContext";
import * as schemas from "../../../schemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../fragments/Input";
import { Link } from "react-router-dom";

export interface IRegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export const RegisterForm = () => {
  const [loadingRegister, setLoadingRegister] = useState(false);

  const { submitRegister } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver: zodResolver(schemas.registerSchema),
  });

  const submit: SubmitHandler<IRegisterFormData> = (formData) => {
    submitRegister(formData, setLoadingRegister);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          error={errors.name?.message}
          label="Nome"
          id="name"
          type="text"
          {...register("name")}
        />
        <Input
          error={errors.email?.message}
          label="Email"
          id="email"
          type="email"
          {...register("email")}
        />
        <Input
          error={errors.password?.message}
          label="Senha"
          id="password"
          type="password"
          {...register("password")}
        />
        <Input
          error={errors.confirmPassword?.message}
          label="Confirmar senha"
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
        />
        <button type="submit" disabled={loadingRegister}>
          {loadingRegister ? "Cadastrando" : "Cadastrar"}
        </button>
      </form>
      <Link to="/">Retornar ao login</Link>
    </>
  );
};
