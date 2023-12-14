import React, { useState } from 'react';

const Item = ({
  id,
  item,
  cost,
  listData,
  setListData,
  provided,
  snapshot,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleClick = (id) => {
    let newData = listData.filter((data) => data.id !== id);
    setListData(newData);
    localStorage.setItem('listData', JSON.stringify(newData));
  };

  //   const handleSubmit = () => {
  //     let newData = listData.map((data) => {
  //       if (data.id === id) {
  //         data.item = editedItem;
  //       }
  //       return data;
  //     });
  //     setListData(newData);
  //     localStorage.setItem('listData', JSON.stringify(newData));
  //     setIsEditing(false);
  //   };

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
        <button onClick={() => setIsEditing(true)} className="edit-button">
          edit
        </button>
        <button onClick={() => handleClick(id)} type="delete-button">
          del
        </button>
      </div>
    </div>
  );
};
export default Item;
