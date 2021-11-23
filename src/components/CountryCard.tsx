import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { numberWithCommas } from "../utils/utils";


type AppProps = {
  alpha3Code: string;
  flag: any;
  name: string;
  population: number;
  region: string;
  capital: string;
};

const CountryCard = ({
  alpha3Code,
  name,
  flag,
  population,
  region,
  capital,
}: AppProps) => {
  const themeContext = useContext(ThemeContext);
  return (
    <Container
      style={{
        background: themeContext?.themeStyles.elements,
        color: themeContext?.themeStyles.text,
      }}
    >
      <Link to={`/${alpha3Code}`}>
        <FlagCon>
          <img src={flag?.svg} alt={name} />
        </FlagCon>
        <TextCon>
          <h3>{name}</h3>
          <div>
            <Bold>Population</Bold>: {numberWithCommas(population)}
          </div>
          <div>
            <Bold>Region</Bold>: {region}
          </div>
          <div>
            <Bold>Capital</Bold>: {capital}
          </div>
        </TextCon>
      </Link>
    </Container>
  );
};

export default CountryCard;

const Container = styled.div`
  width: 290px;
  min-height: 400px;
  margin: 0.8em 0.5em;
  background-color: white;
  border-radius: 10px;
  line-height: 1.5;
  box-shadow: 0 0 0.4em 0 rgba(0, 0, 0, 0.1);
  transition: transform 250ms;
  :hover {
    transform: scale(1.02);
    box-shadow: 0 0 0.4em 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  @media (max-width: 600px) {
    height: 100%;
    margin-bottom: 3em;
    margin-left: auto;
    margin-right: auto;
    width: 270px;
  }
`;

const FlagCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  & > img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    @media (max-width: 600px) {
      max-width: 100%;
    }
  }
`;

const TextCon = styled.div`
  padding: 1em;
  & > h3 {
    font-weight: 600;
    margin-bottom: 1em;
  }
  & > div {
    font-weight: 300;
    margin: 0.5em 0;
  }
`;

const Bold = styled.span`
  font-weight: 600 !important;
`;
