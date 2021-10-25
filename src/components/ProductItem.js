import React from 'react';

const ProductItem = ({ product: { title, image_url, price }, currency }) => {
  const formattedPrice = (number) => new Intl.NumberFormat({ maximumSignificantDigits: 3 }).format(number);
  return (
    <div className='card'>
      <img src={image_url} alt={title} />
      <h3>{title}</h3>
      <h3>
        {currency} {formattedPrice(price)}
      </h3>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductItem;
