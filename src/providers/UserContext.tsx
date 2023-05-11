import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-hot-toast/headless";
import { useNavigate } from "react-router-dom";
import { ILoginFormData } from "../components/forms/LoginForm";
import { IRegisterFormData } from "../components/forms/RegisterForm";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  submitLogin: (formData: ILoginFormData) => Promise<void>;
  submitRegister: (
    formData: IRegisterFormData,
    setLoadingRegister: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  user: IUser | null;
  logout: () => void;
}

interface IUser {
  email: string;
  name: string;
  id: number;
}

interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

interface IUserRegisterResponse {
  accessToken: string;
  user: IUser;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null);

  const submitLogin = async (formData: ILoginFormData) => {
    try {
      const { data } = await api.post<IUserLoginResponse>("login", formData);
      localStorage.setItem("@PATISSERIEFRAISE:TOKEN", data.accessToken);
      localStorage.setItem("@PATISSERIEFRAISE:USERID", String(data.user.id));
      setUser(data.user);
      toast.success(`Olá ${data.user.name}!`);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Email e/ou senha incorretos.");
    }
  };

  useEffect(() => {
    const autoLogin = () => {
      const token = localStorage.getItem("@PATISSERIEFRAISE:TOKEN");
      const id = localStorage.getItem("@PATISSERIEFRAISE:USERID");
      if (token && id) {
        navigate("/home");
      }
    };
    autoLogin();
  }, []);

  const logout = () => {
    localStorage.removeItem("@PATISSERIEFRAISE:TOKEN");
    localStorage.removeItem("@PATISSERIEFRAISE:USERID");
    setUser(null);
    navigate("/");
  };

  const submitRegister = async (
    formData: IRegisterFormData,
    setLoadingRegister: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoadingRegister(true);
      await api.post<IUserRegisterResponse>("/users", formData);
      toast.success("Contra criada com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado.");
    } finally {
      setLoadingRegister(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, submitLogin, logout, submitRegister }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
