import "./Topbar.css";
//@ts-ignore
import LoginIcon from "../../assets/enter.png";
//@ts-ignore
import RegisterIcon from "../../assets/edit.png";
import Button from "../../reusableComponents/Button/Button";

const Topbar = () => {
  return (
    <div className="Topbar">
      <Button text="HOME" />
      <Button text="PRODUCTS" />
      <Button text="BEST SELLERS" />
      <Button icon={LoginIcon} text="LOGIN" buttonColor="blue" />
      <Button icon={RegisterIcon} text="REGISTER" buttonColor="green" />
    </div>
  );
};

export default Topbar;
