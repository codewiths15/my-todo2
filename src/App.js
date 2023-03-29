import React from 'react';
import './App.css';
import  Cards from './components/Cards'
import Title from './components/Title';
import Ellipse from './components/Ellipse';
import Todolist from './components/Todolist';
function App() {
  return (
    <div className="container">
      <Todolist/>
      <Cards
      title='card'
      imageUrl='https://tse3.mm.bing.net/th?id=OIP.zEYXEPspver3gnxgumhhqwHaGL&pid=Api&P=0'
      body='hjiuhhhh'
      />
      <Title/>
      <Ellipse/>
    </div >


  );
}

export default App;
