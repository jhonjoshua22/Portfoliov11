import { useEffect, useState } from 'react';

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
}

const CustomCursor = ({ mousePosition }: CustomCursorProps) => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />
      <div
        className={`custom-cursor-outer hidden md:block ${isHovering ? 'hover' : ''}`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
      />
    </>
  );
};

export default CustomCursor;
