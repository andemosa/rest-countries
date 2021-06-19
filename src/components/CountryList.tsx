import { useContext } from "react";
import styled from "styled-components";
import CountryCard from "./CountryCard";
import { ThemeContext } from "../contexts/ThemeContext";
import { useCountryState } from "../contexts/CountryContext";

const CountryList = () => {
  const state = useCountryState();
  const countries = state?.shownCountries;
  const themeContext = useContext(ThemeContext);
  return (
    <Container
      style={{
        background: themeContext?.themeStyles.background,
        color: themeContext?.themeStyles.text,
      }}
    >
      {countries?.length === 0 ? (
        <div>Sorry, no countries found....</div>
      ) : (
        countries?.map((item, index) => (
          <CountryCard
            capital={item.capital}
            key={index}
            name={item.name}
            flag={item.flag}
            population={item.population}
            region={item.region}
            alpha3Code={item.alpha3Code}
          />
        ))
      )}
    </Container>
  );
};

export default CountryList;

const Container = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 1em 1.6em;
  @media (max-width: 600px) {
    display: block;
    padding: 1em;
  }
`;
