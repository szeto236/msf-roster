import React, { useContext } from "react";
import { StateContext } from "../App";
import { filterArrayValueByArray } from "../utils/filterArrayValue";
import Roster from "./Roster";
import styled from "styled-components";
import { getTotalPower } from "../utils/getTotalPower";

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-template-rows: auto;
  grid-row-gap: 2em;
`;

const NarrowedCharList = styled(Roster)`
  grid-template-columns: repeat(3, 140px);
  grid-column-gap: 0;

  > div {
    &:first-child {
      grid-column-start: 2;
    }

    &:first-child,
    &:nth-child(2) {
      margin-left: -110%;
    }
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 24px;
  margin: 0;
  text-transform: uppercase;
`;

const PowerText = styled.span`
  color: var(--light-grey);
  font-size: 18px;
  margin-right: 4px;
`;

const PowerAmount = styled.span`
  color: var(--yellow);
  font-size: 20px;
  font-weight: 500;
`;

const Teams = () => {
  const data = useContext(StateContext);
  const tech = [
    "Minn-Erva",
    "Crossbones",
    "Star-Lord",
    "Rocket Raccoon",
    "Vision"
  ];
  const shield = [
    "Nick Fury",
    "S.H.I.E.L.D. Assault",
    "S.H.I.E.L.D. Medic",
    "S.H.I.E.L.D. Security",
    "S.H.I.E.L.D. Operative"
  ];
  const defenders = [
    "Iron Fist",
    "Punisher",
    "Daredevil",
    "Jessica Jones",
    "Luke Cage"
  ];
  const brotherhood = [
    "Magneto",
    "Pyro",
    "Juggernaut",
    "Mystique",
    "Sabretooth"
  ];
  const guardians = ["Rocket Raccoon", "Star-Lord", "Gamora", "Groot", "Drax"];
  const spiderVerse = [
    "Venom",
    "Carnage",
    "Spider-man",
    "Spider-man (Miles)",
    "Green Goblin"
  ];

  const techTeam = filterArrayValueByArray(data.values, tech);
  const techTeamPower = getTotalPower(techTeam);
  const shieldTeam = filterArrayValueByArray(data.values, shield);
  const shieldTeamPower = getTotalPower(shieldTeam);
  const defendersTeam = filterArrayValueByArray(data.values, defenders);
  const defendersTeamPower = getTotalPower(defendersTeam);
  const brotherhoodTeam = filterArrayValueByArray(data.values, brotherhood);
  const brotherhoodTeamPower = getTotalPower(brotherhoodTeam);
  const guardiansTeam = filterArrayValueByArray(data.values, guardians);
  const guardiansTeamPower = getTotalPower(guardiansTeam);
  const spiderVerseTeam = filterArrayValueByArray(data.values, spiderVerse);
  const spiderVerseTeamPower = getTotalPower(spiderVerseTeam);

  return (
    <GridWrapper>
      <div>
        <Header>
          <Title>Tech</Title>
          <div>
            <PowerText>Power</PowerText>
            <PowerAmount>{techTeamPower}</PowerAmount>
          </div>
        </Header>
        <NarrowedCharList computeData={techTeam} />
      </div>

      <div>
        <Header>
          <Title>shield</Title>
          <div>
            <PowerText>Power</PowerText>
            <PowerAmount>{shieldTeamPower}</PowerAmount>
          </div>
        </Header>
        <NarrowedCharList computeData={shieldTeam} />
      </div>

      <div>
        <Header>
          <Title>defenders</Title>
          <div>
            <PowerText>Power</PowerText>
            <PowerAmount>{defendersTeamPower}</PowerAmount>
          </div>
        </Header>
        <NarrowedCharList computeData={defendersTeam} />
      </div>

      <div>
        <Header>
          <Title>brotherhood</Title>
          <div>
            <PowerText>Power</PowerText>
            <PowerAmount>{brotherhoodTeamPower}</PowerAmount>
          </div>
        </Header>
        <NarrowedCharList computeData={brotherhoodTeam} />
      </div>

      <div>
        <Header>
          <Title>guardians</Title>
          <div>
            <PowerText>Power</PowerText>
            <PowerAmount>{guardiansTeamPower}</PowerAmount>
          </div>
        </Header>
        <NarrowedCharList computeData={guardiansTeam} />
      </div>

      <div>
        <Header>
          <Title>spider Verse</Title>
          <div>
            <PowerText>Power</PowerText>
            <PowerAmount>{spiderVerseTeamPower}</PowerAmount>
          </div>
        </Header>
        <NarrowedCharList computeData={spiderVerseTeam} />
      </div>
    </GridWrapper>
  );
};

export default Teams;
