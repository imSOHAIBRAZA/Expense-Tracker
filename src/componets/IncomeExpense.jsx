import React,{useContext} from 'react';
import ExpenseContext from '../store/ExpenseContext'


function IncomeExpense() {
    const ExpenseData = useContext(ExpenseContext);

    let expense = 0 ;
    let income = 0;
    ExpenseData.map(v=>{
        if (v.amount < 0) {
            return expense = expense + v.amount;
        }
        else{
            return income = income + v.amount;
        }
    })

    return (
        <div>
            <h2>Income: Rs.{income}</h2>
            <h2>Expense: Rs.{-expense}</h2>
        </div>
    );
}

export default IncomeExpense;