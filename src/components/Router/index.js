import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import NavBar from '../NavBar';
import ProductsPage from '../../pages/ProductsPage';
import CheckoutPage from '../../pages/CheckoutPage';
import SelectBankPage from '../../pages/SelectBankPage';
import ReceiptPage from '../../pages/ReceiptPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <ProductsPage />
        </Route>

        <Route exact path="/checkoutpage">
          <NavBar />
          <CheckoutPage />
        </Route>

        <Route exact path="/selectbankpage">
          <NavBar />
          <SelectBankPage />
        </Route>

        <Route exact path="/receiptpage">
          <NavBar />
          <ReceiptPage />
        </Route>

        <Route path="/">
          <h3>Page under construction (404)</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
