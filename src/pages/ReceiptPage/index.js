import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../components/GlobalContext';
import { useHistory } from 'react-router-dom';

import {
  ReceiptPageContainer,
  ReceiptTittle,
  OrderSummaryCard,
  OrderSummaryTittle,
  Photo,
  Description,
  PaymentMethodCard,
  PaymentMethodTittle,
  PaymentMethodType,
  PaymentMethodTotal,
} from './styles';

import { ProgressButton } from '../../components/Buttons/ProgressButton';

import bankIcon from '../../assets/images/bankIcon.svg';

export default function ReceiptPage() {
  const allContext = useContext(GlobalContext);
  const history = useHistory();

  const product = allContext.chosenProduct;

  useEffect(() => {
    if (!allContext.chosenProduct) {
      history.push('/');
    }
  }, [history, allContext.chosenProduct]);

  return (
    <ReceiptPageContainer>
      <ReceiptTittle>Review and confirmation</ReceiptTittle>

      <OrderSummaryCard>
        <OrderSummaryTittle>Order summary</OrderSummaryTittle>

        <Photo>
          <img src={product.MaxresURL} alt={`Product`} />
        </Photo>

        <Description>
          <p>{product.description}</p>
          <p>
            x 1, {product.color}, Size {product.size}
          </p>
          <p>Item #{product.id}</p>
        </Description>
      </OrderSummaryCard>

      <PaymentMethodCard>
        <PaymentMethodTittle>Payment Method</PaymentMethodTittle>

        <PaymentMethodType>
          <img src={bankIcon} alt="Online bank icon" />
          <p>Online Banking</p>
        </PaymentMethodType>

        <PaymentMethodTotal>
          <div>
            <p>Total cost</p>
            <p>Delivery included</p>
          </div>

          <div>
            <p>${Math.floor(product.price)}</p>
          </div>
        </PaymentMethodTotal>
      </PaymentMethodCard>

      <ProgressButton>Place order</ProgressButton>
    </ReceiptPageContainer>
  );
}
