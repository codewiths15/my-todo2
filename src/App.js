import React from 'react';
import './App.css';
import  Cards from './components/Cards'
import Title from './components/Title';

function App() {
  return (
    <div className="container">
      <Cards
      title='card'
      imageUrl='https://tse3.mm.bing.net/th?id=OIP.zEYXEPspver3gnxgumhhqwHaGL&pid=Api&P=0'
      body='hjiuhhhh'
      />
      <Title/>
    </div >


  );
}

export default App;
