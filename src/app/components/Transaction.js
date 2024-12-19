"use client";
import React, { useContext } from 'react'
import { GlobalContext } from '../other/GlobalState';


const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'positive'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

export default Transaction;
