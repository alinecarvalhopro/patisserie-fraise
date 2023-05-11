import { useUserContext } from "../../providers/UserContext";

export const Header = () => {
  const { logout } = useUserContext();

  return (
    <header>
      <img />
      <button onClick={logout}></button>
    </header>
  );
};
