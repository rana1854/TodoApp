// DeleteTodoButton.js
import React from 'react';

function DeleteTodoButton({ onDelete, id }) {
  return (
    <button onClick={() => onDelete(id)} className="ml-2 py-2 px-4 bg-red-500 text-white rounded">Delete</button>
  );
}

export default DeleteTodoButton;
