import { MyRoutes } from "./routes";
import { UserProvider } from "./providers/UserContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <GlobalStyle />
      <UserProvider>
        <MyRoutes />
      </UserProvider>
    </>
  );
};

export default App;
