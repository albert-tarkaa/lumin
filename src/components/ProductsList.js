import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';
import ProductItem from './ProductItem';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PRODUCTS_LIST_QUERY = gql`
  query ProductsListQuery($currency: Currency!) {
    products {
      id
      title
      image_url
      price(currency: $currency)
    }
  }
`;

const ProductsList = ({ currency }) => {
  console.log(currency);
  const { loading, error, data } = useQuery(PRODUCTS_LIST_QUERY, {
    variables: { currency },
    // pollInterval: 50000,
  });

  if (loading) {
    return <div>{<Skeleton count={10} />}</div>;
  }
  if (error) {
    console.error(error.message);
    return (
      <div>
        <span>{error.message}</span>
      </div>
    );
  }
  return (
    <>
      {data.products.map((product) => {
        return <ProductItem key={product.id} product={product} className='card-container' currency={currency} />;
      })}
    </>
  );
};

export default ProductsList;
