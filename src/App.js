import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Summary from './components/Summary';
import TransactionList from './components/TransactionList';
import AddTranaction from './components/AddTranaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header title='Expense Tracker' />
      <div className='container'>
        <Balance />
        <Summary />
        <TransactionList />
        <AddTranaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
