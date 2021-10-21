import styled, { css } from "styled-components";
import { IStyledProps, ITagsProps } from "../../types";

export const Card = styled.div<IStyledProps>`
  background-color:${({ theme }) => theme.colors.white};
  color:${({ theme }) => theme.colors.secondary};
  border-bottom:1px solid ${({ theme }) => theme.colors.border};
 `;

export const CardContent = styled.div<IStyledProps>`
  display: block;
  position: relative;
  padding-left: 15px;
  margin-bottom: 12px;
  font-size: 22px;
  /* -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; */
  display: flex;
  justify-content: space-between;
`;

// export const CheckBox = styled.input <IStyledProps>`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 15px;
//   width: 15px;
//   color: ${({ theme }) => theme.colors.primary};
//   &:hover {
//     color: ${({ theme }) => theme.colors.primary};
//   }
//  `;


export const TodoText = styled.p<IStyledProps>`
font-size:16px;
color:${({ theme }) => theme.colors.secondary};
&:hover {
  color: ${({ theme }) => theme.colors.primary};
}
`;

export const Tags = styled.button<ITagsProps>`
    /* display: inline-block; */
    color: ${({ theme }) => theme.colors.border};
    background-color:${({ theme }) => theme.colors.primary};
    margin-right:8px;
    padding:5px;
    border-radius:  7px 7px 7px 7px;
    border:1px solid ${({ theme }) => theme.colors.primary};

    ${props => props.colorTag === "Low" && css`
    background-color:${({ theme }) => theme.colors.green};
    border:1px solid ${({ theme }) => theme.colors.green};
  ` }

  ${props => props.colorTag === "Medium" && css`
    background-color:${({ theme }) => theme.colors.orange};
    border:1px solid ${({ theme }) => theme.colors.orange};
  ` }

  ${props => props.colorTag === "High" && css`
    background-color:${({ theme }) => theme.colors.red};
    border:1px solid ${({ theme }) => theme.colors.red};
  ` }
`;

export const Date = styled.div<IStyledProps>`
font-size:14px;
color:${({ theme }) => theme.colors.secondary};
`;

export const UpdateButton = styled.button<IStyledProps>`
font-size:15px;
padding: 6px;
margin:20px;
cursor: pointer;
color: ${({ theme }) => theme.colors.white};
background-color:${({ theme }) => theme.colors.info};
border-radius:  7px 7px 7px 7px;
border:1px solid ${({ theme }) => theme.colors.info};
text-align:left;

`;

export const DeletedButton = styled.button<IStyledProps>`
font-size:15px;
padding: 6px;
margin:30px;
cursor: pointer;
color: ${({ theme }) => theme.colors.white};
background-color:${({ theme }) => theme.colors.danger};
border-radius:  7px 7px 7px 7px;
border:1px solid ${({ theme }) => theme.colors.danger};
text-align:left;
`;
export const CardLeft = styled.div<IStyledProps>`
`;
export const CardRight = styled.div<IStyledProps>`
`;