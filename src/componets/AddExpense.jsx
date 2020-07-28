import React from 'react';

function AddExpense() {
    return (
        <div>
            
            <h2>Add New Transaction</h2>
            <form >
                <input type="text" name="description" placeholder="Enter Description" />
                <input type="number" name="amount"  />
                <button>Add Transaction</button>
            </form>
        </div>
    );
}

export default AddExpense;

