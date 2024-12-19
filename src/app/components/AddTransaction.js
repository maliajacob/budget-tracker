"use client"
import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.js';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount
    }

    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  }
  return (
    <div>
      <h3 className='text-xl justify-center flex pt-3 font-serif'>New Transaction</h3>
      <form onSubmit={onSubmit} className='justify-center grid'>
        <div className='flex m-3'>
          <div className='grid font-serif mr-2'>
              <label htmlFor="text">Description:</label>
              <input className='border-2' type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="'groceries'" />
            </div>
            <div className='font-serif ml-2'>
              <label htmlFor="amount">
                Amount:
                <br />
              </label>
              <input className='border-2' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
        </div>
          
        <button className='p-2 hover:opacity-70 font-bold bg-sky-700'>ADD</button>
        
      </form>
      
    </div>
  );
}