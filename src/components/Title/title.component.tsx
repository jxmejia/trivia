import { memo } from "react";
import { TitleProps } from "./title.definition";
import { StyledTitle } from "./title.style";

const Title = ({ children }: TitleProps): JSX.Element => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default memo(Title);
