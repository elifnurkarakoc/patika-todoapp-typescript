import React from "react";
import { Button, ButtonContent } from "./SidebarButton.styled";

interface IButtonProps {
  text: string;
  icon: JSX.Element | JSX.IntrinsicElements | any;
  //onClick?: () => void;
}
const SidebarButton: React.FC<IButtonProps> = ({ text, icon }) => {
  return (
    <Button>
      <ButtonContent>
        {icon}
        {text}
      </ButtonContent>
    </Button>
  );
};

export default SidebarButton;
