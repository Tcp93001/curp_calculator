import React from 'react';
import './App.css';
import ShowCurp from './components/ShowCurp'
import UserDataForm from './components/UserDataForm';

function App() {

  const submitEmail = (values) => {
    console.log('exit', values)
  }
  return (
    <div className="App">
      <UserDataForm submit={values => submitEmail(values)} />
      <ShowCurp curp="afafsdfsdfsd123123" />
    </div>
  );
}

export default App;
