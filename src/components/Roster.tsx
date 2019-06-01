import React from "react";
import styled from "styled-components/macro";
import * as R from "ramda";
import Character from "../components/Character";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  justify-content: center;
`;

const Roster = ({
  computeData,
  className
}: {
  computeData: string[][];
  className?: string;
}) => {
  return (
    <GridWrapper className={className}>
      {R.isEmpty(computeData) && <h1>Loading...</h1>}
      {computeData &&
        computeData.map(char => {
          const imageUrl = `${process.env.PUBLIC_URL}/images/${char[0]}.png`;
          return (
            <Character
              key={char[0]}
              imageUrl={imageUrl}
              charName={char[0]}
              star={char[11]}
              rStar={char[12]}
              level={char[13]}
              tier={char[18]}
              power={char[19]}
            />
          );
        })}
    </GridWrapper>
  );
};

export default Roster;
