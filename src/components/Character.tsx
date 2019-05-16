import * as React from "react";
import * as R from "ramda";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fontStyle = css`
  text-transform: uppercase;
  font-family: "Mukta Mahee", sans-serif;
  font-weight: 600;
  line-height: 0.9;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 10px;
  margin: 0.5em 0;
`;

const ImageWrapper = styled.div`
  border-radius: 0 0 50% 50%;
  overflow: hidden;
  z-index: 3;
`;

const CircleBg = styled.div`
  background: radial-gradient(
    ellipse at center,
    hsla(0, 0%, 8%, 0) 50%,
    #141414 100%
  );
  border-radius: 50px;
  border: 2px solid #464646;
  height: 73px;
  position: absolute;
  top: 44px;
  width: 73px;
  z-index: 2;
  transition: all 0.3s ease;
`;

const CharName = styled.div`
  ${fontStyle};
  color: #fff;
  font-size: 14px;
  transform: skewX(-15deg);
`;

const InfoOverlay = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 4;
`;

const Level = styled.div`
  ${fontStyle};
  color: #eaeaea;
  font-size: 14px;
  transform: skewX(-15deg);
  z-index: 4;
`;

const Power = styled.div`
  ${fontStyle};
  color: #ffff8e;
  font-size: 26px;
  transform: skewX(-15deg);
  z-index: 4;
`;

const StarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const StarListItem = styled.li``;

type PropsType = {
  imageUrl: string;
  charName: string;
  star: string;
  rStar: string;
  level: string;
  power: string;
};

export const getStars = (rStar: string, star: string) => {
  const starIcon = (color: string) => (
    <StarListItem>
      <FontAwesomeIcon icon="star" color={color} size="xs" />
    </StarListItem>
  );
  const countYellowStars = +star - +rStar;
  const redStar = R.repeat(starIcon("#d41f1f"), +rStar);
  const yellowStar =
    countYellowStars > 0 && R.repeat(starIcon("#ffff8e"), countYellowStars);
  const restStar =
    (7 - +star >= 0 && R.repeat(starIcon("#999"), 7 - +star)) || null;

  return (
    <React.Fragment>
      {redStar}
      {yellowStar}
      {7 - +star >= 0 && restStar}
    </React.Fragment>
  );
};

const Character = ({
  imageUrl,
  charName,
  level,
  power,
  star,
  rStar
}: PropsType) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={imageUrl} alt={charName} />
      </ImageWrapper>
      <CircleBg />
      <InfoOverlay>
        <Level>LVL {level}</Level>
        <Power>{R.replace(",", "", power)}</Power>
        <CharName>{charName}</CharName>
        <StarList>{getStars(rStar, star)}</StarList>
      </InfoOverlay>
    </Wrapper>
  );
};

Character.defaultProps = {
  power: "0",
  imageUrl: "",
  charName: "",
  level: "0",
  star: "0",
  rStar: "0"
};

export default Character;
