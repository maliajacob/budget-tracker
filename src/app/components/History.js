"use client";
import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState.js';

export const History = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className='font-serif'>
      <h3 className='text-xl flex justify-center'>History</h3>
      <ul className='grid justify-center'>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  )
}