"use client";
import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState.js';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className='font-serif'>
      <h4 className='text-xl flex justify-center'>Balance</h4>
      <h1 className='text-3xl flex justify-center'>${total}</h1>
    </div>
  )
}