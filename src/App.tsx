import * as C from "./styles/globalStyles.tsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      <C.GlobalStyles />
    </>
  );
}

export default App;
