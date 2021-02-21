import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../components/GlobalContext';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

const SelectBankPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  width: 95%;
`;

export default function SelectBankPage() {
  const allContext = useContext(GlobalContext);
  const history = useHistory();

  const product = allContext.chosenProduct;

  useEffect(() => {
    if (!allContext.chosenProduct) {
      history.push('/');
    }
  }, [history, allContext.chosenProduct]);

  useEffect(() => {
    const PayWithMyBankOptions = {
      closeButton: false,
      dragAndDrop: true,
      widgetContainerId: 'widget',
    };

    const stablishData = {
      accessId: 'D61EC9BAF0BB369B9438',
      merchantId: '1004314986',
      metadata: { demo: 'enabled' },
      currency: 'USD',
      paymentType: 'Deferred',
      amount: `${product.price}`,
      description: 'jailsom.nogueira@gmail.com',
      merchantReference: '123456',
      returnUrl: '#success',
      cancelUrl: '#cancel',
    };

    const script = document.createElement('script');
    script.src =
      '//sandbox.paywithmybank.com/start/scripts/pwmb.js?accessId=D61EC9BAF0BB369B9438';
    script.async = true;

    script.onload = () => {
      window.PayWithMyBank.selectBankWidget(stablishData, PayWithMyBankOptions);

      window.PayWithMyBank.addPanelListener(function (command, event) {
        if (event) {
          if (command === 'event' && event.type === 'new_location') {
            if (event.data.indexOf('#success') === 0) {
              history.push('/receiptpage');
            } else {
              alert('Transaction canceled');
            }
            return false;
          }
        }
      });
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [history, product.price]);

  return (
    <SelectBankPageContainer>
      <div id="widget"></div>
    </SelectBankPageContainer>
  );
}
