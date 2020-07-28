import React,{useContext} from 'react';
import ExpenseContext from '../store/ExpenseContext'


function Balance() {
    const ExpenseData = useContext(ExpenseContext);

    let TotalBalance = 0 ;
    ExpenseData.map(v=>{
        return TotalBalance = TotalBalance + v.amount;
    })

    return (
        <div>
            <h2>Total: Rs.{TotalBalance}</h2>
        </div>
    );
}

export default Balance;