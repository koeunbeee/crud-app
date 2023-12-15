import React, { useState } from 'react';
import SubmitWhitEditBtn from './SubmitWhitEditBtn';

export default function Add({
  handleSubmit,
  costItem,
  setCostItem,
  costValue,
  setCostValue,
  isEditing,
  setIsEditing,
}) {
  const handleChange = (e) => {
    setCostItem(e.target.value);
    console.log(costItem);
  };

  const costChange = (e) => {
    setCostValue(e.target.value);
    console.log(costValue);
  };

  return (
    <form onSubmit={handleSubmit} className="addItemContainer">
      <div>
        <p>지출항목</p>
        <input
          className="costItem"
          type="text"
          width="30"
          placeholder="예) 렌트비"
          value={costItem}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>비용</p>
        <input
          className="cost"
          type=""
          value={costValue}
          onChange={costChange}
        />
      </div>
      <SubmitWhitEditBtn
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      ></SubmitWhitEditBtn>
    </form>
  );
}
