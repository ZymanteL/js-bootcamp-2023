import CartItem from "../cartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="Cart">
      <CartItem
        name="Iphone"
        description="Iphone 14 pro max 256GB"
        price="1299"
        img="https://www.ideal.lt/media/catalog/category/iphone14.png"
        id='1'
      />
      <CartItem
        name="Samsung s21 ultra"
        price="1099"
        img="https://www.telia.lt/medias/samsung-galaxy-s21-ultra-juoda-128-5.jpg-telia1200x?context=bWFzdGVyfHJvb3R8MTUwNzk4fGltYWdlL2pwZWd8aDQwL2g4Mi85ODczMTQzNDk2NzM0LmpwZ3wyZWQ3YmUwNDhiYjY1ZTFhNzZiZmE3ZGM0OTAyMTMwMTZhNTU1MTU4ZGQ4OTU5NmQwYzM5OGQ5Yzg1NDliZjA0"
        id='2'
      />
      <CartItem
        name="Iphone"
        description="Iphone 14 pro max 256GB"
        price="1299"
        img="https://www.ideal.lt/media/catalog/category/iphone14.png"
        id='3'
      />
      <CartItem
        name="Samsung s21 ultra"
        price="1099"
        img="https://www.telia.lt/medias/samsung-galaxy-s21-ultra-juoda-128-5.jpg-telia1200x?context=bWFzdGVyfHJvb3R8MTUwNzk4fGltYWdlL2pwZWd8aDQwL2g4Mi85ODczMTQzNDk2NzM0LmpwZ3wyZWQ3YmUwNDhiYjY1ZTFhNzZiZmE3ZGM0OTAyMTMwMTZhNTU1MTU4ZGQ4OTU5NmQwYzM5OGQ5Yzg1NDliZjA0"
        id='4'
      />
    </div>
  );
};

export default Cart;
