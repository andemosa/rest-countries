import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { useCountryState } from "../contexts/CountryContext";

interface AppProps {
  name: string;
}

const BorderButton = ({ name }: AppProps) => {
  const themeContext = useContext(ThemeContext);
  const state = useCountryState();

  const showCountryName = (code: string) => {
    const country = state?.countries?.find(
      (country) => country.cca3.toLowerCase() === code.toLowerCase()
    );
    return country?.name.common;
  };

  return (
    <Link to={`/${name}`}>
      {
        <Button
          style={{
            background: themeContext?.themeStyles.elements,
            color: themeContext?.themeStyles.text,
          }}
        >
          {showCountryName(name)}
        </Button>
      }
    </Link>
  );
};

export default BorderButton;

const Button = styled.button`
  padding: 4px 10px;
  display: inline-block;
  margin: 0.5em;
  border: 1px solid grey;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  :hover{
      transform: scale(1.03)
  }
`;
