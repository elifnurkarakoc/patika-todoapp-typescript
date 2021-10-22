import styled from "styled-components";
import { IStyledProps } from "../types"

export const HeaderContainer = styled.div<IStyledProps>`
  padding: 5px;
  width: 60%;
  background-color:${({ theme }) => theme.colors.white};
  color:${({ theme }) => theme.colors.primary};
  border-radius:  7px 7px 7px 7px;
  border:1px solid ${({ theme }) => theme.colors.border};
  position:absolute; top:15px;  overflow:hidden;
  height:64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderText = styled.h1<IStyledProps>`
  text-align:left;
  padding-left:10px;
  margin:0px;
`;

export const AvatarImg = styled.img<IStyledProps>`
  border-radius: 50%;
  width:50px;
  height:50px;
  margin-right:10px;
  box-shadow: 0 4px 8px 0 rgb(34 41 47 / 12%), 0 2px 4px 0 rgb(34 41 47 / 8%);
`;
export const ProfileText = styled.span<IStyledProps>`
  margin:6px;
  font-size:13px;
  font-weight: bold;
  color:${({ theme }) => theme.colors.secondary};
`;

export const Avatar = styled.div<IStyledProps>`
  white-space: nowrap;
  position: relative;
  color: #fff;
  display: inline-flex;
  font-size: 1rem;
  vertical-align: middle;
  font-weight: 600;
`;
export const Profile = styled.div<IStyledProps>`
  display: flex;
  align-items: center;
`;
export const AvatarStatus = styled.span<IStyledProps>`
  background-color: ${({ theme }) => theme.colors.green};
  right: 14px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  width: 11px;
  height: 11px;
  position: absolute;
  bottom: 0;
  display: inline-flex;
  font-size: 1rem;
  vertical-align: middle;
  font-weight: 600;
`;
export const ContentContainer = styled.div<IStyledProps>`
  background-color:${({ theme }) => theme.colors.white};
  color:${({ theme }) => theme.colors.secondary};
  border-radius: 7px 7px 7px 7px;
  border:1px solid ${({ theme }) => theme.colors.border};
  display:flex;
  flex-direction: column;
  position:absolute; 
  top:100px; 
  left:20%; 
  right:20%;  
  bottom:80px; 
  overflow:auto; 
`;

export const FooterContainer = styled.footer<IStyledProps>`
  flex-shrink: 0;
  color:${({ theme }) => theme.colors.secondary};
  position:absolute; bottom:0px; height:40px;  overflow:hidden; 
`;

