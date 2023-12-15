import React from 'react';
import { useState } from 'react';

const SubmitWhitEditBtn = (isEditing, setIsEditing) => {
  if (isEditing) {
    return (
      <button className="edit" type="submit">
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
};

export default SubmitWhitEditBtn;
