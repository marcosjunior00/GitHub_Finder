type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";
import * as C from "./styles";

const Header = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName).catch((error) => console.error(error));
    }
  };

  return (
    <C.Container>
      <C.Icon className="bx bxl-github" style={{ color: "#ffffff" }}></C.Icon>

      <C.SearchBar>
        <C.Input
          type="text"
          placeholder="Digite o nome de um usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <C.SearchBtn onClick={() => loadUser(userName)}>
          <i className="bx bx-search" style={{ color: "#ffffff" }}></i>
        </C.SearchBtn>
      </C.SearchBar>
    </C.Container>
  );
};

export default Header;
