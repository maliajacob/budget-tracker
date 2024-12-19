"use client";
import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer.js';

const initialState = {
    initialized: false,
    transactions: []
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    function initializeState(transactions) {
        dispatch({
            type: 'INITIALIZE_STATE',
            payload: transactions
        });
    }

    useEffect(() => {
        if (state.initialized) {
            localStorage.setItem("budgetTrackerState", JSON.stringify(state));
        }
    }, [state]);

    useEffect(() => {
        let stringifiedBudgetTrackerState = localStorage?.getItem("budgetTrackerState");
        let transactions = [];
        if (stringifiedBudgetTrackerState) {
            let budgetTrackerState;
            try {
                budgetTrackerState = JSON.parse(stringifiedBudgetTrackerState);
            } catch(e) {
                console.log("unable to parse budgetTrackerState from localStorage");
            }
            if (budgetTrackerState?.transactions) {
                transactions = budgetTrackerState.transactions;
            }
        }
        initializeState(transactions);
    }, []);

    return (
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}