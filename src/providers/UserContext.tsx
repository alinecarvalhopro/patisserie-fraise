import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { ILoginFormData } from "../components/AllForms/LoginForm";
import { IRegisterFormData } from "../components/AllForms/RegisterForm";
import toast from "react-hot-toast";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  submitLogin: (
    formData: ILoginFormData,
    setLoadingLogin: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
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

  const submitLogin = async (
    formData: ILoginFormData,
    setLoadingLogin: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setLoadingLogin(true);
    try {
      const { data } = await api.post<IUserLoginResponse>("login", formData);
      localStorage.setItem("@PATISSERIEFRAISE:TOKEN", data.accessToken);
      localStorage.setItem("@PATISSERIEFRAISE:USERID", String(data.user.id));
      setUser(data.user);
      toast(`Olá, ${data.user.name}!`, {
        style: {
          borderRadius: "10px",
          padding: "16px",
          background: "#EEC8BB",
          color: "#1E1E1E",
        },
      });
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast(`E-mail e/ou senha incorretos.`, {
        style: {
          borderRadius: "10px",
          padding: "16px",
          background: "#B61739",
          color: "#fff",
        },
      });
    } finally {
      setLoadingLogin(false);
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
      setTimeout(() => {
        navigate("/");
      }, 2000);
      toast("Conta criada com sucesso!", {
        style: {
          borderRadius: "10px",
          padding: "16px",
          background: "#EEC8BB",
          color: "#1E1E1E",
        },
      });
    } catch (error) {
      console.log(error);
      toast("Algo deu errado.", {
        style: {
          borderRadius: "10px",
          padding: "16px",
          background: "#B61739",
          color: "#fff",
        },
      });
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
