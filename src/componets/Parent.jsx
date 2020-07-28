import React from 'react';
import Balance from './Balance';
import ExpenseList from './ExpenseList';
import AddExpense from './AddExpense';
import IncomeExpense from './IncomeExpense';



// Header
// Balance
// IncomeExpense
// TransactionList
//     Transaction
// AddTransaction

function Parent() {
    return (
        <div>
            <Balance/>
            <IncomeExpense/>
            <ExpenseList/>
            <AddExpense/>
            
        </div>
    );
}

export default Parent;
