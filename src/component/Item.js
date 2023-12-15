import React, { useCallback, useState } from 'react';

const Item = ({
  id,
  item,
  cost,
  listData,
  setListData,
  provided,
  snapshot,
  handleClick,
  editClick,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  // const [editedItem, setEditedItem] = useState(item);

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
      onClick={() => editClick(id)}
    >
      <div className="item-container">
        <span className="item-name">{item}</span>
        <span className="cost-label">{cost}</span>
      </div>
      <div className="item-edit-with-delete-container">
        <button onClick={() => setIsEditing(true)} className="edit-button">
          edit
        </button>
        <button onClick={() => handleClick(id)} className="delete-button">
          del
        </button>
      </div>
    </div>
  );
};
export default Item;
