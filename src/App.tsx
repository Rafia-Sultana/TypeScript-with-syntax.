import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './componenets/Counter';
import Users from './componenets/Users';

interface Person {
  name: string,
  job?: string,
  age: number,
  location?: string | number
}
const person: Person = {
  name: 'Bill Clinton',
  age: 58,
  location: 55
}





function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
