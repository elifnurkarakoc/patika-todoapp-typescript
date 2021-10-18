import React from 'react'
import * as styles from "./styles"
interface IButtonProps {
    text: string;
    //onClick?: () => void;
  }
const Button:React.FC<IButtonProps> = ({text}) => {
    return (
        <styles.Button>
            {text}
        </styles.Button>
    )
}

export default Button
