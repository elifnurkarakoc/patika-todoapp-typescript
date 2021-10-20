import styled from "styled-components";
import { IStyledProps } from "../../types";

export const ErrorText = styled.p<IStyledProps>`
margin:2px;
padding:2px;
text-align: center;
color: ${({ theme }) => theme.colors.red};
`;