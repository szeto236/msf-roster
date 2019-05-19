import React from "react";

type PropsType = {
  tier: number;
  className?: string;
};

const TierGrow = ({ tier, className }: PropsType) => {
  let growColor = "transparent";
  let secondaryGrowColor = "transparent";

  if (tier > 0 && tier < 5) {
    growColor = "#00ff00";
    secondaryGrowColor = "#004d00";
  } else if (tier >= 5 && tier < 9) {
    growColor = "#56aeff";
    secondaryGrowColor = "#355a7d";
  } else if (tier >= 9) {
    growColor = "#ff00ff";
    secondaryGrowColor = "#660066";
  }

  return (
    <svg width="120" height="120" className={className}>
      {tier % 4 === 1 && (
        <circle
          cx="60"
          cy="77"
          r="40"
          stroke={growColor}
          strokeWidth="2"
          fill="transparent"
        />
      )}
      {tier % 4 === 2 && (
        <React.Fragment>
          <circle
            cx="60"
            cy="77"
            r="40"
            stroke={growColor}
            strokeWidth="1"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="77"
            r="55"
            stroke={growColor}
            strokeWidth="4"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="77"
            r="59"
            stroke={growColor}
            strokeWidth="1"
            fill="transparent"
          />
        </React.Fragment>
      )}
      {tier % 4 === 3 && (
        <React.Fragment>
          <circle
            cx="60"
            cy="77"
            r="40"
            stroke={growColor}
            strokeWidth="1"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="77"
            r="46"
            stroke={growColor}
            strokeWidth="4"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="77"
            r="50"
            stroke={growColor}
            strokeWidth="1"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="77"
            r="58"
            stroke={secondaryGrowColor}
            strokeWidth="4"
            fill="transparent"
          />
        </React.Fragment>
      )}
      {tier !== 0 && tier % 4 === 0 && (
        <React.Fragment>
          <circle
            cx="60"
            cy="77"
            r="40"
            stroke={growColor}
            strokeWidth="1"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="77"
            r="46"
            stroke={growColor}
            strokeWidth="4"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="77"
            r="50"
            stroke={growColor}
            strokeWidth="1"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="77"
            r="58"
            stroke={secondaryGrowColor}
            strokeWidth="4"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="77"
            r="57"
            strokeDasharray="40,20,60"
            stroke={growColor}
            strokeWidth="2"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="77"
            r="60"
            strokeDasharray="100,100"
            stroke={growColor}
            strokeWidth="2"
            fill="transparent"
          />
        </React.Fragment>
      )}
    </svg>
  );
};

export default TierGrow;
