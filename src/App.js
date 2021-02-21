import React from 'react';
import Router from './components/Router';

import { GlobalStorage } from './components/GlobalContext';

import { AppContainer, AppWrapper } from './appStyles';

function App() {
  return (
    <div>
      <GlobalStorage>
        <AppContainer>
          <AppWrapper>
            <Router />
          </AppWrapper>
        </AppContainer>
      </GlobalStorage>
    </div>
  );
}

export default App;
