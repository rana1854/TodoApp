// EditTodoCheckbox.js
import React from 'react';

function TodoCheckbox({ onToggle, id, completed }) {
  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={() => onToggle(id)}
    />
  );
}

export default TodoCheckbox;
