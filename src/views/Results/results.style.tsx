import styled from "@emotion/styled";
import theme from "../../styles/theme";

export const TitleContainer = styled.div`
  margin: 50px;
`;

export const TextContainer = styled.div`
  color: ${theme.colors.gray};
  font-size: 18px;
  margin: auto;
  padding: 25px;
  width: 50%;

  & div {
    text-align: left;
  }
`;

export const ButtonContainer = styled.div`
  margin: 25px;
`;
