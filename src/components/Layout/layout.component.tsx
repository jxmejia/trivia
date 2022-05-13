import { memo } from "react";
import { LayoutProps } from "./layout.definition";
import { StyledLayout } from "./layout.style";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default memo(Layout);
