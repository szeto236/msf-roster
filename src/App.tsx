import React from "react";
import useSheetApi from "./hooks/useSheetApi";
import Character from "./components/Character";
import { GlobalStyles } from "./components/GlobalStyles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components/macro";

library.add(fasFaStar, farFaStar);

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-template-rows: auto;
`;

const params = {
  spreadsheetId: "1XoNQlKdUsCMQ0Ew6g5q_nqQuJMccv8XrAbkDypJQdqI",
  sheetRange: "Roster!A3:W102",
  apiKey: process.env.REACT_APP_API_KEY as string,
  majorDimension: "ROWS"
};

const App: React.FC = () => {
  const data = useSheetApi({ ...params });
  return (
    <React.Fragment>
      <GlobalStyles />
      <GridWrapper>
        {data.values.map(char => {
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
