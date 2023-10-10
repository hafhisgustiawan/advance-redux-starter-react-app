import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../store/index';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const items = useSelector((state) => state.cart.items);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(toggle());
    console.log(cart);
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;
