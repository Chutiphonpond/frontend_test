import React, { useState } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="w-full h-screen p-4">
      <p>Hello world</p>
      <p>Hello Imageslider</p>
    </div>
  );
};

export default ImageSlider;
