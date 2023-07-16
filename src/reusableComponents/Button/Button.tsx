import "./Button.css";
import {SetStateAction} from "react";

interface ButtonProps {
  icon?: string;
  text: string;
  buttonColor?: "green" | "red" | "grey" | "blue";
  setItem: React.Dispatch<SetStateAction<string>>;
  // setItem?: React.Dispatch<React.SetStateAction<any>>;
  id: string;
}

const Button = ({ icon, text, buttonColor, setItem, id }: ButtonProps) => {
  return (
    <button
      onClick={() => setItem(id)}
      style={
        buttonColor
          ? { backgroundColor: buttonColor }
          : { backgroundColor: "grey" }
      }
      className="SharedButton"
    >
      {text}
      {icon && <img className="ButtonIcon" src={icon} alt="" />}
    </button>
  );
};

export default Button;
