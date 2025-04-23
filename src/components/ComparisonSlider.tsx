import { useState } from 'react';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  containerWidth?: string;
  containerHeight?: string;
}

export const ComparisonSlider = ({
  beforeImage,
  afterImage,
  containerWidth = 'w-full',
  containerHeight = 'aspect-[70/45]',
}: ComparisonSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className={`${containerWidth} relative`} onMouseUp={handleMouseUp}>
      <div
        className={`relative ${containerWidth} ${containerHeight} m-auto overflow-hidden select-none border border-gray-200 rounded-lg`}
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
      >
        {/* After Image */}
        <div className="relative w-full h-full rounded-lg">
          <img
            alt="After"
            src={afterImage}
            draggable="false"
            className="w-full h-full object-cover absolute top-0 left-0 rounded-lg"
          />
        </div>

        {/* Before Image with clip path */}
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="relative w-full h-full">
            <img
              alt="Before"
              src={beforeImage}
              draggable="false"
              className="w-full h-full object-cover absolute top-0 left-0 rounded-lg"
            />
          </div>
        </div>

        {/* Slider Control */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
    </div>
  );
};