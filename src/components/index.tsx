import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import CountryDetail from "./CountryDetail";
import CountryList from "./CountryList";
import Filters from "./Filters";
import Header from "./Header";
import { ThemeContext } from "../contexts/ThemeContext";

const Index = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Wrapper
      style={{
        background: themeContext?.themeStyles.background,
        color: themeContext?.themeStyles.text,
      }}
    >
      <Header />
      <Switch>
        <Route path="/:name">
          <CountryDetail />
        </Route>
        <Route path="/">
          <Filters />
          <CountryList />
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;
