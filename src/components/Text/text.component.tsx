import { memo } from "react";
import type { TextProps } from "./text.definition";
import { StyledText } from "./text.style";

const Text = ({ children }: TextProps): JSX.Element => {
  return <StyledText>{children}</StyledText>;
};

export default memo(Text);
