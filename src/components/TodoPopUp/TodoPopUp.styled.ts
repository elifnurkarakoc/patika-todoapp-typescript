import styled from "styled-components";
import { IStyledProps } from "../../types";


export const TodoPopUpContainer = styled.div<IStyledProps>`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.796);
`;

export const TodoPopUpContent = styled.div<IStyledProps>`
height: 550px;
position: absolute;
left: 25%;
right: 25%;
top: 25%;
bottom: 25%;
border-radius: 5px;
margin: auto;
padding-top:5px;
float: left;
background: white;
overflow: auto;
`;

export const CloseButton = styled.button<IStyledProps>`
position: fixed;
right: 26%;
font-size: 26px;
font-weight: bold;
color:${({ theme }) => theme.colors.secondary};
background-color:${({ theme }) => theme.colors.white};
border:none;
&:hover {
    color:${({ theme }) => theme.colors.purple};
  }
`;

export const Input = styled.input<IStyledProps>`
padding:5px;
margin:5px;
height:40px;
font-size:18px;
margin-bottom: 10px;
color:${({ theme }) => theme.colors.secondary};
border: 2px solid ${({ theme }) => theme.colors.secondary};
border-radius: 4px;
`;
export const Label = styled.label<IStyledProps>`
padding:3px;
height:20px;
font-size:18px;
margin-bottom: 15px;
`;
export const TextArea = styled.textarea<IStyledProps>`
padding:5px;
margin:5px;
height:80px;
font-size:18px;
margin-bottom:10px;
border: 2px solid ${({ theme }) => theme.colors.secondary};
border-radius: 4px;
`;

export const Select = styled.select<IStyledProps>`
padding:5px;
margin:5px;
font-size:18px;
color:${({ theme }) => theme.colors.secondary};
border: 2px solid ${({ theme }) => theme.colors.secondary};
border-radius: 4px;
`;

export const Form = styled.form<IStyledProps>`
left: 25%;
right: 25%;
top: 25%;
bottom: 25%;
padding:50px;
display:flex;
flex-direction:column;
`;

export const Button = styled.button<IStyledProps>`
font-size:18px;
justify-content:center;
align-items:center;
text-align:center;
background-color:${({ theme }) => theme.colors.primary};
border-color:${({ theme }) => theme.colors.primary};
color:${({ theme }) => theme.colors.white};
border-radius: 7px 7px 7px 7px;
border: 1px solid transparent;
padding:8px;
margin-bottom: 10px;
cursor: pointer;
&:hover {
  background-color:${({ theme }) => theme.colors.purple};
}
`;

export const Header = styled.div<IStyledProps>`
position: fixed;
padding:10px;
margin-top: 3px;
margin-left:50px;
font-size: 24px;
font-weight: bold;
border:none;
&:hover {
    color:${({ theme }) => theme.colors.purple};
  }
`;


