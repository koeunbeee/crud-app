import { useEffect, useState, useCallback } from 'react';
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
  const [isEditing, setIsEditing] = useState(false);

  // useEffect(() => {
  // }, []);

  console.log(localStorage.getItem('costData'));

  const handleClick = useCallback(
    (id) => {
      let newData = data.filter((data) => data.id !== id);
      setData(newData);
      localStorage.setItem('costData', JSON.stringify(newData));
    },
    [data]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    let newCostData = {
      id: Date.now(),
      item: costItem,
      cost: costValue,
    };

    setData((e) => [...e, newCostData]);
    localStorage.setItem('costData', JSON.stringify([...data, newCostData]));
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
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        ></Add>
        <Itemlist
          listData={data}
          setlistData={setData}
          handleClick={handleClick}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setCostItem={setCostItem}
          setCostValue={setCostValue}
        ></Itemlist>
      </div>
      <p className="total"> 총 지출 : 원</p>
    </div>
  );
}

export default App;
