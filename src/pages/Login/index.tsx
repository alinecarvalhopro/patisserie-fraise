import { LoginForm } from "../../components/AllForms/LoginForm";
import logo1 from "../../assets/logo1.png";
import { StyledDiv } from "./style";

export const Login = () => {
  return (
    <>
      <StyledDiv>
        <div className={"boxImg"}>
          <img className={"logo1"} src={logo1} />
        </div>
        <div className={"box"}>
          <LoginForm />
        </div>
      </StyledDiv>
    </>
  );
};
