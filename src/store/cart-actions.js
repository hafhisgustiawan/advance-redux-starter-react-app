import { showNotification, replaceItem } from './index';

//cek video 295
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch('https://belajar-rest.firebaseio.com/cart.json');

      if (!res.ok) throw new Error('Could not fetch data!');

      const data = await res.json();

      return data;
    };

    try {
      const data = await fetchData();
      // format sudah benar krn dari awal mmg format yang sama
      dispatch(replaceItem(data));

      dispatch(
        showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sending cart data successfully!',
        })
      );
    } catch (err) {
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error!',
          message: err.message,
        })
      );
    }
  };
};

// cek video 294
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const res = await fetch('https://belajar-rest.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!res.ok) {
        throw new Error('Sending cart data failed');
      }
    };

    try {
      await sendRequest();

      dispatch(
        showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sending cart data successfully!',
        })
      );
    } catch (err) {
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error!',
          message: err.message,
        })
      );
    }
  };
};
