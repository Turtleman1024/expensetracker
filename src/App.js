import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Summary from './components/Summary';
import TransactionList from './components/TransactionList';
import AddTranaction from './components/AddTranaction';
import './App.css';

function App() {
  return (
    <div>
      <Header title='Expense Tracker' />
      <div className='container'>
        <Balance />
        <Summary />
        <TransactionList />
        <AddTranaction />
      </div>
    </div>
  );
}

export default App;
