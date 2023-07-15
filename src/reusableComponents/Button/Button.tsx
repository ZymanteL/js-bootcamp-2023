import "./Button.css";

interface ButtonProps {
  icon?: string;
  text: string;
  buttonColor?: "green" | "red" | "grey" | "blue";
}

const Button = ({ icon, text, buttonColor }: ButtonProps) => {
  return (
    <button
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
