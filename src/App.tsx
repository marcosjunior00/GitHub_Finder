import Header from "./components/Header/index.tsx";
import * as C from "./styles/globalStyles.tsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <C.GlobalStyles />
    </>
  );
}

export default App;
