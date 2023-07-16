import "./CartItem.css";
//@ts-ignore
import CartIcon from "../../assets/cart.png";
import Button from "../../reusableComponents/Button/Button";
import { useState } from "react";

interface CartItemProps {
  name: string;
  description?: string;
  price: string;
  img: string;
  id: string;
}

const CartItem = ({ name, description, price, img, id }: CartItemProps) => {
  const [item, setItem]: any = useState("");

  return (
    <div className="CartItem">
      {item === id && (
        <img
          className="CartItemCheck"
          src="https://img.icons8.com/?size=512&id=sz8cPVwzLrMP&format=png"
          alt=""
        /> 
      )}
      <div>
        <h1>{name}</h1>
        <p>{description ? description : "No description..."}</p>
        <p>{price}</p>
      </div>
      <img
        onClick={() => setItem(name)}
        className="CartItemImg"
        src={img}
        alt=""
      />
      <Button
        setItem={setItem}
        icon={CartIcon}
        text="Add to cart"
        buttonColor="green"
        id={id}
      />
    </div>
  );
};

export default CartItem;
