import React from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ getColor,currentColor }) => {
  const handleChange = (color) => {
    getColor(color.hex);
  };

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={currentColor}
        disableAlpha
        onChange={handleChange}
      />
    </div>
  );
};

export default ColorPicker;
