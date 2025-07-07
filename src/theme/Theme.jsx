import React, { useEffect } from 'react';
import './Theme.css';

// const colorOptions = [
//   270, 180, 120, 60, 0, 240, 300, 200, 50, 320 
// ];
// const colorOptions = [
//   220, 210, 200, 180, 160, 140, 100, 60, 30, 10
// ];
const colorOptions = [
  265,15, 45, 95, 155, 195, 225, 305, 340,0
];


const Theme = ({ onClose, changeTheme }) => {
  useEffect(() => {
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
      changeTheme(savedColor);
    }
  }, [changeTheme]);

  const handleColorSelect = (hue) => {
    changeTheme(hue);
    localStorage.setItem('selectedColor', hue); 
    onClose(); 
  };

  return (
    <div className="theme-popup">
      <div className="theme-popup__content">
        <h3>Select a Theme Color</h3>
        <div className="theme-popup__colors">
          {colorOptions.map((hue) => (
            <button
              key={hue}
              className="color-option"
              style={{ backgroundColor: `hsl(${hue}, 89%, 41%)` }}
              onClick={() => handleColorSelect(hue)}
            />
          ))}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Theme;
