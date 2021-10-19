import React from "react";
import * as styles from "./styles";

interface IButtonProps {
  text: string;
  icon: JSX.Element | JSX.IntrinsicElements | any;
  //onClick?: () => void;
}
const SidebarButton: React.FC<IButtonProps> = ({ text, icon }) => {
  return (
    <>
      <styles.Button>
        <styles.ButtonContent>
        {icon}
        {text}
        
        </styles.ButtonContent>
        {/* <styles.ButtonIcon>{icon}</styles.ButtonIcon>
        <styles.ButtonText>{text}</styles.ButtonText> */}
      </styles.Button>
    </>
  );
};

export default SidebarButton;
