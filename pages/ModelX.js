import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onMouseEnter={toggleMenu}
        onMouseLeave={toggleMenu}
      >
        Menu
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-md">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-100">Option 1</li>
            <li className="py-2 px-4 hover:bg-gray-100">Option 2</li>
            <li className="py-2 px-4 hover:bg-gray-100">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
