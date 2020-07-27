import React, { useContext } from 'react';
import expenseStore from '../store/ExpenseContext';

function ExpenseList() {
    let ExpenseData = useContext(expenseStore);

    return (
        <div>
            <h1> Expense List</h1>

            {
                ExpenseData.map((v, i) => (
                    <ul>
                        <li>{v.amount}</li>
                        <li>{v.description}</li>
                    </ul>
                ))
            }
        </div>

    );
}

export default ExpenseList;
