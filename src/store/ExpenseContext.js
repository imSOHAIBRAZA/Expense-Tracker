import React,{createContext} from 'react';

const initialState = [
    {id:1, amount:1000, description:'Bonus'},
    {id:2, amount:-200, description:'Coocking Oil'},
    {id:3, amount:-50, description:'Sop'},
    {id:4, amount:4500, description:'Salary'}
]

const  expenseStore  = createContext(initialState);

export default expenseStore;