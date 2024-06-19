import React from 'react';

interface ColorFilterProps {
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const ColorFilter: React.FC<ColorFilterProps> = ({ selectedColor, onSelectColor }) => {
  const colors = ['all', 'red', 'blue', 'green', 'yellow', 'pink'];

  return (
    <div className="flex justify-center mb-4">
      {colors.map((color) => (
        <button
          key={color}
          className={`px-4 py-2 mx-2 rounded-full ${selectedColor === color ? 'bg-gray-400' : 'bg-gray-200'}`}
          onClick={() => onSelectColor(color)}
        >
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ColorFilter;
