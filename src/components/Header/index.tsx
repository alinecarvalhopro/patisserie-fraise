import { useUserContext } from "../../providers/UserContext";
import logo2 from "../../assets/logo2.png";
import bag from "../../assets/bag.png";
import { StyledHeader } from "./style";

export const Header = () => {
  const { logout } = useUserContext();

  return (
    <StyledHeader>
      <img className={"logo2"} src={logo2} />
      <div>
        <img className={"bag"} src={bag} />
        <button onClick={logout}>Sair</button>
      </div>
    </StyledHeader>
  );
};
