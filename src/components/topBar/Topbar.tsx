import "./Topbar.css";
//@ts-ignore
import LoginIcon from "../../assets/enter.png";
//@ts-ignore
import RegisterIcon from "../../assets/edit.png";
import Button from "../../reusableComponents/Button/Button";
import {useState} from "react"

const Topbar = () => {

  const [topbarItem, setTopbarItem ] = useState("")

  
  return (
    <div className="Topbar">
      <Button text="HOME" id="topbar-home" setItem={setTopbarItem}/>
      <Button text="PRODUCTS" id="topbar-products" setItem={setTopbarItem}/>
      <Button text="BEST SELLERS" id="topbar-bestSellers" setItem={setTopbarItem}/>
      <Button
        icon={LoginIcon}
        text="LOGIN"
        buttonColor="blue"
        id="topbar-login" setItem={setTopbarItem}
      />
      <Button
        icon={RegisterIcon}
        text="REGISTER"
        buttonColor="green"
        id="topbar-register"
        setItem={setTopbarItem}/>
    </div>
  );
};

export default Topbar;
