import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import BorderButton from "./BorderButton";
import {
  useCountryDispatch,
  useCountryState,
} from "../contexts/CountryContext";
import { getCountryDetail, setCountryCode } from "../contexts/countryAction";
import {
  numberWithCommas,
  showItems,
  showCurrencies,
  showLanguages,
} from "../utils/utils";

interface RouteParams {
  name: string;
}

export default function CountryDetail() {
  const dispatch = useCountryDispatch();
  const state = useCountryState();
  const themeContext = useContext(ThemeContext);
  const params = useParams<RouteParams>();
  const country = params.name.toLowerCase();
  const countryDetail = state?.countryDetail;

  useEffect(() => {
    setCountryCode(dispatch, { countryCode: country });
    getCountryDetail(dispatch);
    return () => {};
  }, [country, dispatch]);

  return (
    <Container>
      <Link to="/">
        <Button
          style={{
            background: themeContext?.themeStyles.elements,
            color: themeContext?.themeStyles.text,
          }}
        >
          <i className="fas fa-arrow-left"></i> Back
        </Button>
      </Link>
      <Flex>
        <FlagCon>
          <img
            src={countryDetail?.flags?.svg}
            alt=""
            style={{
              border: `1px solid ${themeContext?.themeStyles.text}`,
            }}
          />
        </FlagCon>
        <DetailsCon>
          <h3>{countryDetail?.name?.common}</h3>
          <Flex>
            <DetailsCon>
              <div>
                <Bold>Native Name :</Bold> {countryDetail?.name?.common}
              </div>
              <div>
                <Bold>Population :</Bold>{" "}
                {numberWithCommas(countryDetail?.population!)}
              </div>
              <div>
                <Bold>Region :</Bold> {countryDetail?.region}
              </div>
              <div>
                <Bold>Sub Region :</Bold> {countryDetail?.subregion}
              </div>
              <div>
                <Bold>Capital :</Bold> {countryDetail?.capital}
              </div>
            </DetailsCon>
            <DetailsCon>
              <div>
                <Bold>Top Level Domain :</Bold> {countryDetail?.tld}
              </div>
              <div>
                <Bold>Currencies :</Bold>{" "}
                {countryDetail &&
                  showItems(showCurrencies(countryDetail?.currencies))}
              </div>
              <div>
                <Bold>Languages :</Bold>{" "}
                {countryDetail &&
                  showItems(showLanguages(countryDetail?.languages))}
              </div>
            </DetailsCon>
          </Flex>
          <BorderCon>
            <div>
              <Border>Borders:</Border>
              <BorderDetails>
                {!countryDetail?.borders?.length
                  ? `Unfortunately ${countryDetail?.name?.common} has no known bordering countries`
                  : countryDetail?.borders?.map((border) => (
                      <BorderButton key={border} name={border} />
                    ))}
              </BorderDetails>
            </div>
          </BorderCon>
        </DetailsCon>
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 2em;
  position: relative;
  z-index: 1;
`;

const Button = styled.button`
  padding: 8px 16px;
  display: block;
  margin: 2em 0;
  border: 1px solid grey;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    transform: scale(1.03);
  }
  & > .fas {
    display: inline-block;
    padding: 0 6px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FlagCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  & > img {
    max-width: 90%;
    height: auto;
    border-radius: 5px;
  }
  @media (max-width: 1200px) {
    flex: 2;
  }
`;

const DetailsCon = styled.div`
  flex: 1;
  & > h3 {
    margin: 1em 0 0.5em;
  }
  @media (max-width: 1200px) {
    flex: 3;
  }
`;

const Bold = styled.span`
  font-weight: 600 !important;
  display: inline-block;
  margin: 0.2em 0;
  font-size: 1.1rem;
`;

const BorderCon = styled.div`
  margin: 2em 0;
  & > div {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

const Border = styled(Bold)`
  margin-right: 5px;
`;

const BorderDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
