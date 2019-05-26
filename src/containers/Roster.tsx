import React, { useState, useEffect } from "react";
import useSheetApi from "../hooks/useSheetApi";
import { filterArrayValueByArray } from "../utils/filterArrayValue";
import Roster from "../components/Roster";
import * as R from "ramda";

const params = {
  spreadsheetId: "1XoNQlKdUsCMQ0Ew6g5q_nqQuJMccv8XrAbkDypJQdqI",
  sheetRange: "Sorted!B2:U103",
  apiKey: process.env.REACT_APP_API_KEY as string,
  majorDimension: "ROWS"
};

type DataType = {
  values: string[][];
};

const RosterContainer = () => {
  const data: DataType = useSheetApi({ ...params });
  const [computeData, setComputeData] = useState(data.values);

  useEffect(() => {
    (() => setComputeData(data.values))();
  }, [data]);

  const traits: DataType = useSheetApi({
    ...params,
    sheetRange: "Traits!A1:AF1",
    majorDimension: "COLUMNS"
  });
  const traitsChars: DataType = useSheetApi({
    ...params,
    sheetRange: "Traits!A2:AF55",
    majorDimension: "COLUMNS"
  });

  return (
    <React.Fragment>
      {traits.values &&
        R.flatten(traits.values).map((trait, i) => {
          return (
            <button
              onClick={() =>
                setComputeData(
                  filterArrayValueByArray(data.values, traitsChars.values[i])
                )
              }
            >
              View {trait}
            </button>
          );
        })}

      <Roster computeData={computeData} />
    </React.Fragment>
  );
};

export default RosterContainer;
