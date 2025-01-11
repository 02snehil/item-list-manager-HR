import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa'; // Import delete icon from react-icons
import logo from './assets/HackerRank_Icon.png';
import './App.css';

function App() {
  const [items, setItems] = useState([]); // State to store the list of items
  const [inputValue, setInputValue] = useState(''); // State to store the input field value

  // Function to handle adding items to the list
  const handleAddItem = () => {
    if (inputValue.trim() !== '') { // Only add non-empty input
      setItems([...items, inputValue]); // Add the new item to the list
      setInputValue(''); // Clear the input field
    }
  };

  // Function to handle deleting an item from the list
  const handleDeleteItem = (indexToDelete) => {
    const filteredItems = items.filter((_, index) => index !== indexToDelete);
    setItems(filteredItems);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <img src={logo} alt="HackerRank Logo" className="header-logo-image" />
        <h1>Item List Manager</h1>
      </header>
      <main>
        <h2 className="section-title">Item List</h2>
        <div className="input-container">
          <input
            type="text"
            className="input-field"
            placeholder="Enter item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="add-button" onClick={handleAddItem}>Add Item</button>
        </div>
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="item">
              <span className="item-text">{item}</span>
              <button
                className="delete-button"
                onClick={() => handleDeleteItem(index)}
              >
                <FaTrash className="delete-icon" />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App
