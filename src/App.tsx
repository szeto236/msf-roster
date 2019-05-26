import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import Roster from "./containers/Roster";

library.add(fasFaStar, farFaStar);

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />

      <Roster />
    </React.Fragment>
  );
};

export default App;
