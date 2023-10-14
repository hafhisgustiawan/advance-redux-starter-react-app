import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { showNotification } from './store/index';
import { Fragment } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let initial = true;

function App() {
  const cartVisible = useSelector((state) => state.ui.cartVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  // INI ADALAH SEBUAH TRIK DIMANA KITA MENUNGGU PERUBAHAN STATE DI REDUX DAN MENGIRIM REQUEST KE SERVER
  // useEffect(() => {
  //   // console.log('dieksekusi');
  //   const sendCartData = async () => {
  //     dispatch(
  //       showNotification({
  //         status: 'pending',
  //         title: 'Sending...',
  //         message: 'Sending cart data!',
  //       })
  //     );
  //     const res = await fetch('https://belajar-rest.firebaseio.com/cart.json', {
  //       method: 'PUT',
  //       body: JSON.stringify(cart),
  //     });

  //     if (!res.ok) {
  //       throw new Error('Sending cart data failed');
  //     }

  //     // const data = (await res).json();
  //     dispatch(
  //       showNotification({
  //         status: 'success',
  //         title: 'Success!',
  //         message: 'Sending cart data successfully!',
  //       })
  //     );
  //   };

  //   if (initial) {
  //     initial = false;
  //     return;
  //   }

  // 	console.log('send data')
  //   sendCartData().catch((error) => {
  //     dispatch(
  //       showNotification({
  //         status: 'error',
  //         title: 'Error!',
  //         message: error.message,
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);
  // redux guarantee dispatch never change

  useEffect(() => {
    //INI NAMANYA ACTION CREATOR BY REDUX, NANTINYA AKAN RETURN FUNCTION YANG DI PARAMETERNYA NYA ADA DISPATCH, HARUSNYS DISPATCH ATAU USE DISPATCH GABISA DI GUNAKAN DILUAR COMPONENT
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    //action creator fn by redux cek video 294
    if (cart.changed) dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  // redux guarantee dispatch never change

  return (
    <Fragment>
      {notification && <Notification {...notification} />}
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
