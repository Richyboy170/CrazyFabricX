import React from 'react';

interface CircleProps {
  color: string;
  isSelected: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const Circle: React.FC<CircleProps> = ({ color, isSelected, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div
      className={`w-12 h-12 mx-2 rounded-full cursor-pointer ${isSelected ? 'border-4 border-gray-400' : ''}`}
      style={{ backgroundColor: color }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    ></div>
  );
};

export default Circle;
