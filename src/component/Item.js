import React, { useCallback, useState } from 'react';

const Item = ({
  id,
  item,
  cost,
  provided,
  snapshot,
  delClick,
  valueEditClick,
}) => {
  return (
    // <div className="item-container">
    <div
      key={id}
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      className=""
    >
      <div className="item-container">
        <span className="item-name">{item}</span>
        <span className="cost-label">{cost}</span>
      </div>
      <div className="item-edit-with-delete-container">
        <button onClick={() => valueEditClick(id)} className="edit-button">
          edit
        </button>
        <button onClick={() => delClick(id)} className="delete-button">
          del
        </button>
      </div>
    </div>
  );
};
export default Item;
