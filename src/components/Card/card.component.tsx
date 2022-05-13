import { memo } from "react";
import type { CardProps } from "./card.definition";
import { StyledCard } from "./card.style";

const Card = ({ children }: CardProps): JSX.Element => {
  return <StyledCard>{children}</StyledCard>;
};

export default memo(Card);
