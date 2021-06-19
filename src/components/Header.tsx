import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Nav
      style={{
        background: themeContext?.themeStyles.elements,
        color: themeContext?.themeStyles.text,
        transition:"background 2s ease-out"
      }}
    >
      <h1>Where in the world?</h1>
      <Link
        to="#"
        style={{
          textDecoration: "none",
          color: themeContext?.themeStyles.text,
        }}
        onClick={themeContext?.toggleTheme}
      >
        {themeContext?.isLightTheme ? (
          <>
            <i className="fas fa-moon"></i> Dark Mode 
          </>
        ) : (
          <>
            <i className="fas fa-sun"></i> Light Mode 
          </>
        )}
      </Link>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  padding: 1em 3em;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.4em 0 rgb(0 0 0 / 10%);
  @media (max-width: 992px) {
    padding: 1em 2em;
  }
  @media (max-width: 576px) {
    padding: 1em 0.8em;
    & > h1 {
        font-size: 1.2rem;
    }
  }
`;
