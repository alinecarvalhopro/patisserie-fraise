import { RegisterForm } from "../../components/AllForms/RegisterForm";
import logo1 from "../../assets/logo1.png";
import { StyledDiv } from "./style";

export const Register = () => {
  return (
    <StyledDiv>
      <div className={"boxImg"}>
        <img className={"logo1"} src={logo1} />
      </div>
      <div className={"box"}>
        <RegisterForm />
      </div>
    </StyledDiv>
  );
};
