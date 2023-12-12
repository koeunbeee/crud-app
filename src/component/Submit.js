import React from 'react';
import { useState } from 'react';

const Submit = () => {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <button className="edit">수정</button>;
  } else {
    return <button className="submit">제출</button>;
  }
};

export default Submit;
