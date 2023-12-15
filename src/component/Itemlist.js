import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Item from './Item';

export default function Itemlist({
  listData,
  setListData,
  handleClick,
  isEditing,
  setIsEditing,
  setCostItem,
  setCostValue,
}) {
  const handleRemoveClick = () => {
    setListData([]);
    localStorage.setItem('listData', JSON.stringify([]));
  };

  const handleEnd = (result) => {
    if (!result.destination) return;

    const newData = listData;
    const [reorderedItem] = newData.splice(result.source.index, 1);

    newData.splice(result.destination.index, 0, reorderedItem);
    setListData(newData);
    localStorage.setItem('listData', JSON.stringify(newData));
  };

  const editClick = (id) => {
    let editData = listData.filter((data) => data.id === id);
    console.log(editData);
    setCostItem(editData.item);
    setCostValue(editData.cost);
    //에러 난다 다른방법...
  };

  return (
    <div className="list">
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="crud-app">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {listData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <Item
                      key={data.id}
                      id={data.id}
                      item={data.item}
                      cost={data.cost}
                      listData={listData}
                      setListData={setListData}
                      provided={provided}
                      snapshot={snapshot}
                      handleClick={handleClick}
                      editClick={editClick}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button className="itemClear" onClick={handleRemoveClick}>
        목록 지우기
      </button>
    </div>
  );
}
