import * as C from "./styles";

const Header = () => {
  return (
    <C.Container>
      <C.Icon className="bx bxl-github" style={{ color: "#ffffff" }}></C.Icon>

      <C.SearchBar>
        <C.Input type="text" />
        <C.SearchBtn>
          <i className="bx bx-search" style={{ color: "#ffffff" }}></i>
        </C.SearchBtn>
      </C.SearchBar>
    </C.Container>
  );
};

export default Header;
