import React, { useState, useEffect } from "react";
import useSheetApi from "./hooks/useSheetApi";
import Character from "./components/Character";
import { GlobalStyles } from "./components/GlobalStyles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components/macro";
import * as R from "ramda";
import { sortArrayOfArray } from "./utils/sortArrayOfArray";
import { filterArrayValue } from "./utils/filterArrayValue";

library.add(fasFaStar, farFaStar);

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  justify-content: center;
`;

const params = {
  spreadsheetId: "1XoNQlKdUsCMQ0Ew6g5q_nqQuJMccv8XrAbkDypJQdqI",
  sheetRange: "Roster!A3:W104",
  apiKey: process.env.REACT_APP_API_KEY as string,
  majorDimension: "ROWS"
};

const App: React.FC = () => {
  const data: { values: string[][] } = useSheetApi({ ...params });
  const [computeData, setComputeData] = useState(data.values);
  const sortByPower = sortArrayOfArray(20, data.values);

  useEffect(() => {
    (() => setComputeData(data.values))();
  }, [data]);

  return (
    <React.Fragment>
      <GlobalStyles />

      <button onClick={() => setComputeData(sortByPower)}>sortByPower</button>
      <button
        onClick={() => setComputeData(filterArrayValue(data.values, "Blaster"))}
      >
        View Blaster
      </button>
      <button
        onClick={() =>
          setComputeData(filterArrayValue(data.values, "Controller"))
        }
      >
        View Controller
      </button>
      <button
        onClick={() => setComputeData(filterArrayValue(data.values, "Brawler"))}
      >
        View Brawler
      </button>
      <button
        onClick={() => setComputeData(filterArrayValue(data.values, "Tech"))}
      >
        View Tech
      </button>

      <GridWrapper>
        {R.isEmpty(computeData) && <h1>Loading...</h1>}
        {computeData &&
          computeData.map(char => {
            const imageUrl = `${process.env.PUBLIC_URL}/images/${char[1]}.png`;
            return (
              <Character
                key={char[2]}
                imageUrl={imageUrl}
                charName={char[2]}
                star={char[12]}
                rStar={char[13]}
                level={char[14]}
                tier={char[19]}
                power={char[20]}
              />
            );
          })}
      </GridWrapper>
    </React.Fragment>
  );
};

export default App;
