import { Toaster } from "react-hot-toast";
import { MyRoutes } from "./routes";
import { UserProvider } from "./providers/UserContext";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
    <GlobalStyle/>
      <UserProvider>
        <MyRoutes />
      </UserProvider>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default App;
