import { Link } from "react-router-dom";
import notFoundImage from "../../assets/notFoundImage.png";
import { StyledDiv } from "./style";

export const NotFound = () => {
  return (
    <StyledDiv>
      <div>
        <img className={"not-found"} src={notFoundImage} />
        <Link to="/">Retornar ao login</Link>
      </div>
    </StyledDiv>
  );
};
