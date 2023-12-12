import React from 'react';
import Submit from './Submit';

export default function Add() {
  return (
    <div className="addItemContainer">
      <div>
        <p>지출항목</p>
        <input className="costItem" type="text" placeholder="예) 렌트비" />
      </div>
      <div>
        <p>비용</p>
        <input className="cost" type="" />
      </div>
      <Submit></Submit>
    </div>
  );
}
