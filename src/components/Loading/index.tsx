import { useUserContext } from "../../providers/UserContext";
import loading from "../../assets/loading.png";
import { StyledDiv } from "./style";

export const Loading = () => {
  return (
    <StyledDiv>
      <img className={"loading"} src={loading} />
    </StyledDiv>
  );
};
