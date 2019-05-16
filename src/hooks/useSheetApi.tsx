import { useState, useEffect } from "react";
import axios from "axios";

type hooksType = {
  spreadsheetId: string;
  sheetRange: string;
  apiKey: string;
  majorDimension: string;
};

function useSheetApi({
  spreadsheetId,
  sheetRange,
  apiKey,
  majorDimension
}: hooksType) {
  const [data, setData] = useState({ values: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetRange}?key=${apiKey}&majorDimension=${majorDimension}`
      );

      setData({ values: result.data.values });
    };

    fetchData();
  }, [spreadsheetId, sheetRange, apiKey, majorDimension]);

  return data;
}

export default useSheetApi;
