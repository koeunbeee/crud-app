import { useState } from 'react';
import './App.css';
import Add from './component/Add';
import Itemlist from './component/Itemlist';

const initialCostData = localStorage.getItem('costData')
  ? JSON.parse(localStorage.getItem('costData'))
  : [];

function App() {
  const [costItem, setCostItem] = useState('');
  const [costValue, setCostValue] = useState('');
  const [data, setData] = useState(initialCostData);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newCostData = {
      id: Date.now(),
      item: costItem,
      cost: costValue,
    };
    console.log(newCostData);

    setData((prev) => [...prev, newCostData]);
    localStorage.setItem('costData', JSON.stringify(...data, newCostData));

    console.log(data);
    console.log(localStorage.getItem('costData'));

    setCostItem('');
    setCostValue('');
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
        <Itemlist listData={data} setlistData={setData}></Itemlist>
      </div>
      <p className="total"> 총 지출 : 원</p>
    </div>
  );
}

export default App;
