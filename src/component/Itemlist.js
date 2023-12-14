import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Item from './Item';

export default function Itemlist({ listData, setListData }) {
  const handleRemoveClick = () => {
    setListData([]);
    localStorage.setItem('listData', JSON.stringify([]));
  };

  const handleEnd = (result) => {
    // result 매개변수에는 source 항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보가 포함됩니다.
    console.log(result);
    // 목적지가 없으면(이벤트 취소) 이 함수를 종료합니다.
    if (!result.destination) return;

    // 리액트 불변성을 지켜주기 위해 새로운 todoData 생성
    const newData = listData;

    // 1. 변경시키는 아이템을 배열에서 지워줍니다.
    // 2. return 값으로 지워진 아이템을 잡아줍니다.
    const [reorderedItem] = newData.splice(result.source.index, 1);

    // 원하는 자리에 reorderedItem을 insert 해줍니다.
    newData.splice(result.destination.index, 0, reorderedItem);
    setListData(newData);
    localStorage.setItem('listData', JSON.stringify(newData));
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
