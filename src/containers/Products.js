import React, { useContext } from 'react';

import ProductItem from '../components/Products/ProductItem';
import { ProductsContext } from './../components/context/context-productss';
import './Products.css';

const Products = props => {
  const productList = useContext(ProductsContext).products;
  return (
    <ul className="products-list">
      {console.log(`rendering...`)}
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;