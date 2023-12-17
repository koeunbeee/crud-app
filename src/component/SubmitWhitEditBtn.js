import React from 'react';
import { useState, useCallback } from 'react';

export default function SubmitWhitEditBtn(isEditing, setIsEditing) {
  // const [isEditing, setIsEditing] = useState(false);
  // isEditing, setIsEditing
  // console.log(isEditing);
  // const seveClick = useCallback(() => {
  //   setIsEditing(!isEditing);
  // }, []);

  // const seveClick =() => {
  //   setIsEditing(!isEditing);
  // };

  // return isEditing === true ? (
  //   <button className="submit" type="submit" onClick={() => seveClick()}>
  //     수정
  //   </button>
  // ) : (
  //   <button className="submit" type="submit">
  //     제출
  //   </button>
  // );

  if (isEditing) {
    console.log(isEditing);
    return (
      <button
        className="submit"
        type="submit"
        onClick={() => setIsEditing(false)}
      >
        수정
      </button>
    );
  } else {
    return (
      <button className="submit" type="submit">
        제출
      </button>
    );
  }
}
