import React from "react";
import {
  Button,
  ButtonContent,
  ButtonIcon,
  ButtonText,
} from "./SidebarButton.styled";
import {IButtonProps} from "../../types/"
const SidebarButton: React.FC<IButtonProps> = ({ text, icon,handleClick }) => {
  return (
    <Button onClick={handleClick}>
      <ButtonContent>
        <ButtonIcon>{icon}</ButtonIcon>
        <ButtonText>{text}</ButtonText>
      </ButtonContent>
    </Button>
  );
};

export default SidebarButton;
