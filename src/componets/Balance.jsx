import React,{useContext} from 'react';
import ExpenseContext from '../store/ExpenseContext'


function Balance() {
    const ExpenseData = useContext(ExpenseContext);

    let totalBalance = 0 ;
    ExpenseData.map(v=>{
        return totalBalance = totalBalance + v.amount;
    })

    return (
        <div>
            <h2>Total Balance: Rs.{totalBalance > 0 ? totalBalance : 0}</h2>
        </div>
    );
}

export default Balance;