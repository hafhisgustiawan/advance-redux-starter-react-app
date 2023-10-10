import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 9,
    name: 'My first book',
    description: 'This is my first book',
  },
  {
    id: 'p2',
    price: 12,
    name: 'My second book',
    description: 'This is my second book',
  },
  {
    id: 'p3',
    price: 6,
    name: 'My third book',
    description: 'This is my third book',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {/* <h2>{process.env.REACT_APP_API_KEY}</h2> */}
      <ul>
        {DUMMY_PRODUCTS.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.name}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
