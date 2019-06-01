import React, { createContext } from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import Roster, { DataType } from "./containers/Roster";
import { Tabs } from "antd";
import styled from "styled-components";
// @ts-ignore
import styles from "antd/lib/tabs/style/index.css";
import useSheetApi from "./hooks/useSheetApi";
import Teams from "./components/Teams";

const params = {
  spreadsheetId: "1XoNQlKdUsCMQ0Ew6g5q_nqQuJMccv8XrAbkDypJQdqI",
  sheetRange: "Sorted!B2:U103",
  apiKey: process.env.REACT_APP_API_KEY as string,
  majorDimension: "ROWS"
};

const { TabPane } = Tabs;

const StyledTabs = styled.div`
  ${styles};

  && {
    .ant-tabs {
      color: #fff;
      text-transform: uppercase;
    }
  }
`;

export const StateContext = createContext({ values: [[""]] });

library.add(fasFaStar, farFaStar);

const App: React.FC = () => {
  const data: DataType = useSheetApi({ ...params });

  return (
    <StateContext.Provider value={data}>
      <GlobalStyles />

      <StyledTabs>
        <Tabs
          defaultActiveKey="roster"
          size="large"
          animated={{ tabPane: false, inkBar: true }}
        >
          <TabPane key="roster" tab="roster">
            <Roster />
          </TabPane>
          <TabPane key="teams" tab="teams">
            <Teams />
          </TabPane>
        </Tabs>
      </StyledTabs>
    </StateContext.Provider>
  );
};

export default App;
