import { MyRoutes } from "./routes";
import { UserProvider } from "./providers/UserContext";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <MyRoutes />
      </UserProvider>
    </>
  );
};

export default App;
