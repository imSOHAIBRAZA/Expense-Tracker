import React,{useState} from 'react';
import Parent from './componets/Parent';
import './App.css';

function App() {
  const initialState = [
    {id:1, amount:100, description:'Car'},
    {id:2, amount:400, description:'Coocking Oil'},
    {id:3, amount:800, description:'Sop'}
]

  return (
    <div className="App">
      {/* <Context.Provider  value={initialState}> */}
        <Parent />
      {/* </Context.Provider> */}
      
    </div>
  );
}

export default App;
