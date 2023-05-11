import { Toaster } from "react-hot-toast";
import { MyRoutes } from "./routes";
import { UserProvider } from "./providers/UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <MyRoutes />
      </UserProvider>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default App;
