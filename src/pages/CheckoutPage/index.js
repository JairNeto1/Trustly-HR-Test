import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../components/GlobalContext';
import { useHistory } from 'react-router-dom';

import {
  CheckoutWrapper,
  CheckoutTittle,
  ProductCard,
  Photo,
  Total,
  Delete,
  Amount,
  Description,
  Delivery,
} from './styles';

import deleteIcon from '../../assets/images/deleteIcon.svg';
import PaymentMethods from './PaymentMethods';
import { ProgressButton } from '../../components/Buttons/ProgressButton';

export default function CheckoutPage() {
  const allContext = useContext(GlobalContext);
  const history = useHistory();

  const [chosenPaymentMethod, setChosenPaymentMethod] = useState('onlineBanks');

  const product = allContext.chosenProduct;

  useEffect(() => {
    if (!allContext.chosenProduct) {
      history.push('/');
    }
  }, [history, allContext.chosenProduct]);

  const handlePaymentMethod = (paymentMethod) => {
    setChosenPaymentMethod(paymentMethod);
  };

  const handleDeleteProduct = () => {
    allContext.setChosenProduct(null);
    history.push('/');
  };

  const goToSelectBankPage = () => {
    if (chosenPaymentMethod === 'onlineBanks') {
      history.push('/selectbankpage');
    } else {
      alert('Unsupported payment method, please use "Online banking"');
    }
  };

  return (
    <CheckoutWrapper>
      <CheckoutTittle>Checkout</CheckoutTittle>
      <ProductCard>
        <Photo>
          <img src={product.MaxresURL} alt={`Product`} />
        </Photo>

        <Total>
          <p>Total cost</p>
          <p>Delivery included</p>
        </Total>

        <Delete>
          <img
            src={deleteIcon}
            alt="Delete buttom"
            onClick={handleDeleteProduct}
          />
        </Delete>

        <Amount>
          <p>${Math.floor(product.price)}</p>
        </Amount>

        <Description>
          <p>{product.description}</p>
          <p>
            x 1, {product.color}, Size {product.size}
          </p>
          <p>Item #{product.id}</p>
        </Description>

        <Delivery>
          <p>Delivery details</p>
          <p>Jay Nogueira</p>
          <p>Phone no:+5527995792112</p>
          <p>Adress: Guarapari City, 29216-080</p>
        </Delivery>
      </ProductCard>

      <PaymentMethods handlePaymentMethod={handlePaymentMethod} />

      <ProgressButton onClick={goToSelectBankPage}>Continue</ProgressButton>
    </CheckoutWrapper>
  );
}
