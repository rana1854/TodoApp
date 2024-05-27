// AddTodoForm.js
import React, { useState } from 'react';

function AddTodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-container mb-4">
      <input
        type="text"
        placeholder="Enter your todo"
        value={inputValue}
        onChange={handleChange}
        className="border border-gray-300 rounded py-2 px-4 w-64"
      />
      <button type="submit" className="ml-2 py-2 px-4 bg-blue-500 text-white rounded">Add</button>
    </form>
  );
}

export default AddTodoForm;
