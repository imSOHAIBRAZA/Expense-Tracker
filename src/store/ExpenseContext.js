import React,{createContext} from 'react';

const initialState = [
    {id:1, amount:100, description:'Car'},
    {id:2, amount:400, description:'Coocking Oil'},
    {id:3, amount:800, description:'Sop'}
]

const  expenseStore  = createContext(initialState);

export default expenseStore;