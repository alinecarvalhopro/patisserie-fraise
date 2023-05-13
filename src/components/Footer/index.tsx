import { Link } from "react-router-dom";
import by from "../../assets/by.png";
import { StyledFooter } from "./style";

export const Footer = () => {
  return (
    <StyledFooter>
      <img className={"by"} src={by} />
      <Link target="blank" to="https://www.linkedin.com/in/aline-carvalho-dev/">LinkedIn</Link>
    </StyledFooter>
  );
};
