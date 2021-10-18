import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface ContainerProps {
  theme: DefaultTheme;
}
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export default Container;
