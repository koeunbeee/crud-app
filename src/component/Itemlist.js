import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Item from './Item';

export default function Itemlist({
  listData,
  setListData,
  delClick,

  valueEditClick,
}) {
  const handleRemoveClick = () => {
    setListData('');
    localStorage.setItem('costData', JSON.stringify([]));
  };

  const handleEnd = (result) => {
    if (!result.destination) return;

    const newData = listData;
    const [reorderedItem] = newData.splice(result.source.index, 1);

    newData.splice(result.destination.index, 0, reorderedItem);
    setListData(newData);
    localStorage.setItem('costData', JSON.stringify(newData));
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
                      provided={provided}
                      snapshot={snapshot}
                      valueEditClick={valueEditClick}
                      delClick={delClick}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button className="itemClear" onClick={() => handleRemoveClick()}>
        목록 지우기
      </button>
    </div>
  );
}
