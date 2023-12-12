import { useState } from 'react';
import './App.css';
import Add from './component/Add';
import Itemlist from './component/Itemlist';

function App() {
  const [costItem, setCostItem] = useState('');
  const [costValue, setCostValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1>예산 계산기</h1>
      <div className="costBlock">
        <Add
          handleSubmit={handleSubmit}
          costItem={costItem}
          setCostItem={setCostItem}
          costValue={costValue}
          setCostValue={setCostValue}
        ></Add>
        <Itemlist></Itemlist>
      </div>
      <p className="total"> 총 지출 : 원</p>
    </div>
  );
}

export default App;
