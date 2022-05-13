import { memo } from "react";
import type { ButtonProps } from "./button.definition";
import { StyledButton } from "./button.style";

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default memo(Button);
