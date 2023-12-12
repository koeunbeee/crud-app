import './App.css';
import Add from './component/Add';
import Itemlist from './component/Itemlist';

function App() {
  return (
    <div className="container">
      <h1>예산 계산기</h1>
      <div className="costBlock">
        <Add></Add>
        <Itemlist></Itemlist>
      </div>
      <p className="total"> 총 지출 : 원</p>
    </div>
  );
}

export default App;
