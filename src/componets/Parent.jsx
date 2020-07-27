import React from 'react';
import ExpenseList from './ExpenseList';
import AddExpense from './AddExpense';
import TotalExpense from './TotalExpense';

function Parent() {
    return (
        <div>
            <TotalExpense/>
            <ExpenseList/>
            <AddExpense/>
            
        </div>
    );
}

export default Parent;
