import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../../components/GlobalContext';
import { useHistory } from 'react-router-dom';

import {
  ProductsListWrapper,
  ProductCard,
  ProductDescription,
  ProductPrice,
} from './styles';

import SizeAndQuantity from '../SizeAndQuantity';
import { ProgressButton } from '../../../components/Buttons/ProgressButton';

export default function ProductsList(props) {
  const allContext = useContext(GlobalContext);
  const history = useHistory();

  const [size, setSize] = useState('36');
  const [quantity, setQuantity] = useState('0');

  const handleChosenProduct = (
    productId,
    productPrice,
    productDescription,
    productThumbUrl,
    productmMaxresURL,
    productColor,
  ) => {
    if (!quantity || quantity === '0') {
      alert('Please choose a quantity');
    } else {
      allContext.setChosenProduct({
        id: productId,
        description: productDescription,
        size: size,
        quantity: quantity,
        price: productPrice,
        color: productColor,
        thumbnailURL: productThumbUrl,
        MaxresURL: productmMaxresURL,
      });

      history.push('/checkoutpage');
    }
  };

  const handleSize = (event) => {
    event.preventDefault();
    setSize(event.target.value);
  };

  const handleQuantity = (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
  };

  const filtered =
    allContext.allProducts &&
    allContext.allProducts.filter((item) =>
      item.description.toLowerCase().includes(props.filter.toLowerCase()),
    );

  return (
    <ProductsListWrapper>
      {filtered &&
        filtered.map((product) => {
          return (
            <ProductCard key={product.id}>
              <img
                src={product.thumbnailURL}
                alt={`Thumbnail ${product.description}`}
              />

              <ProductDescription>{product.description}</ProductDescription>

              <SizeAndQuantity
                handleSize={handleSize}
                handleQuantity={handleQuantity}
              />

              <ProductPrice>$ {product.price}</ProductPrice>

              <ProgressButton
                onClick={() =>
                  handleChosenProduct(
                    product.id,
                    product.price,
                    product.description,
                    product.thumbnailURL,
                    product.maxresURL,
                    product.color,
                  )
                }
              >
                Add to cart
              </ProgressButton>
            </ProductCard>
          );
        })}
    </ProductsListWrapper>
  );
}
