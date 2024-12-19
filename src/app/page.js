import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';
import { appWithTranslation } from 'next-i18next';

import { GlobalProvider } from './context/GlobalState';

import './globals.css';

function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Header />
      <div>
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;