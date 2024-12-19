"use client";
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.js';

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transactions => transactions.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className='font-serif flex justify-center'>
      <div className='my-3 p-3 bg-slate-100'>
        <h4 className='text-xl'>Income</h4>
        <p>${income}</p>
      </div>
      <div className='my-3 p-3 bg-slate-100'>
        <h4 className='text-xl'>Expense</h4>
        <p>${expense}</p>
      </div>
    </div>

  )
}