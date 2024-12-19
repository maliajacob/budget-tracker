"use client";
import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../other/GlobalState.js';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
      </ul>
    </>
  )
}