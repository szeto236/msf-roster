import * as React from "react";
import * as R from "ramda";
import styled, { css } from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TierGrow from "./TierGrow";

const fontStyle = css`
  text-transform: uppercase;
  font-weight: 500;
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
  z-index: -1;
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

const StyledTierGrow = styled(TierGrow)`
  position: absolute;
  top: 4px;
  z-index: -1;
  overflow: visible;
`;

const StarListItem = styled.li``;

type PropsType = {
  imageUrl: string;
  charName: string;
  star: string;
  rStar: string;
  level: string;
  power: string;
  tier: string;
};

export const getStars = (rStar: string, star: string) => {
  let countYellowStars = +star - +rStar > 0 ? +star - +rStar : 0;
  let redStar = +rStar;
  let restStar = 7 - +star >= 0 ? 7 - +star : 0;
  let emptyRStar;

  if (+rStar > +star) {
    emptyRStar = +rStar - +star;
    redStar = +star;
    restStar = 7 - (emptyRStar + redStar);
  }

  return {
    redStar: redStar,
    greyStar: restStar,
    yellowStar: countYellowStars,
    emptyRStar: +rStar > +star ? +rStar - +star : 0
  };
};

const StarIcon = ({ color, icon }: { color: string; icon: any }) => (
  <StarListItem>
    <FontAwesomeIcon icon={icon} color={color} size="xs" />
  </StarListItem>
);

const Character = ({
  imageUrl,
  charName,
  level,
  power,
  star,
  rStar,
  tier
}: PropsType) => {
  const stars = getStars(rStar, star);

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={`${imageUrl}?v=1`} alt={charName} />
      </ImageWrapper>
      <CircleBg />
      <StyledTierGrow tier={+tier} />
      <InfoOverlay>
        <Level>LVL {level}</Level>
        <Power>{R.replace(",", "", power)}</Power>
        <CharName>{charName}</CharName>
        <StarList>
          {stars.redStar > 0 &&
            R.repeat(
              <StarIcon icon={["fas", "star"]} color="#d41f1f" />,
              stars.redStar
            )}
          {stars.emptyRStar > 0 &&
            R.repeat(
              <StarIcon icon={["far", "star"]} color="#d41f1f" />,
              stars.emptyRStar
            )}
          {stars.yellowStar > 0 &&
            R.repeat(
              <StarIcon icon={["fas", "star"]} color="#ffff8e" />,
              stars.yellowStar
            )}
          {stars.greyStar > 0 &&
            R.repeat(
              <StarIcon icon={["fas", "star"]} color="#999" />,
              stars.greyStar
            )}
        </StarList>
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
  rStar: "0",
  tier: "0"
};

export default Character;
