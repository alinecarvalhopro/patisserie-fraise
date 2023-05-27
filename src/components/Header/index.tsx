import { useUserContext } from "../../providers/UserContext";
import logo2 from "../../assets/logo2.png";
import bag from "../../assets/bag.png";
import { StyledHeader } from "./style";
import { useCartContext } from "../../providers/CartContext";

export const Header = () => {
  const { logout } = useUserContext();
  const { setModalIsOpen } = useCartContext();

  return (
    <StyledHeader>
      <img className={"logo2"} src={logo2} />
      <div>
        <div onClick={() => setModalIsOpen(true)} className={"buttonBag"}>
          <img className={"bag"} src={bag} />
        </div>
        <button className={"buttonLeave"} onClick={logout}>
          Sair
        </button>
      </div>
    </StyledHeader>
  );
};
