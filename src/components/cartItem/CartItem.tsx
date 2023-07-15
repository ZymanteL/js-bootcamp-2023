import "./CartItem.css";
//@ts-ignore
import CartIcon from "../../assets/cart.png"
import Button from "../../reusableComponents/Button/Button";

interface CartItemProps {
  name: string;
  description?: string;
  price: string;
  img: string;
}

const CartItem = ({name, description, price, img}: CartItemProps) => {
  return (
    <div className="CartItem">
      <div>
        <h1>{name}</h1>
        <p>{description ? description : "No description..."}</p>
        <p>{price}</p>
      </div>
      <img className="CartItemImg"
        src={img}
        alt=""
      />
      <Button icon={CartIcon} text="Buy now" buttonColor="red"/>      
    </div>
  );
};

export default CartItem;
