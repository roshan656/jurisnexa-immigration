import React, { useEffect, useState, useRef } from "react";
import Icon from "../../assets/Logo/Icon.gif";

const CursorIcon = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [adjustedPosition, setAdjustedPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState("right"); 

  const prevPos = useRef({ x: 0, y: 0 });
  const iconSize = 72;
  const offset = 10;

  useEffect(() => {
    const moveHandler = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const dx = x - prevPos.current.x;
      const dy = y - prevPos.current.y;

      if (Math.abs(dx) > Math.abs(dy)) {
        setDirection(dx > 0 ? "right" : "left");
      } else {
        setDirection(dy > 0 ? "down" : "up");
      }
      let adjustedX = x + offset;
      let adjustedY = y + offset;

      if (x + iconSize + offset > windowWidth) {
        adjustedX = x - iconSize - offset;
      }
      if (y + iconSize + offset > windowHeight) {
        adjustedY = y - iconSize - offset;
      }

      setPosition({ x, y });
      setAdjustedPosition({ x: adjustedX, y: adjustedY });
      prevPos.current = { x, y };
    };

    window.addEventListener("mousemove", moveHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);
  let transform = "";
  if (direction === "left") transform = "scaleX(-1)";
  if (direction === "up") transform = "rotate(-90deg)";
  if (direction === "down") transform = "rotate(90deg)";
  if (direction === "right") transform = "none";

  return (
    <img
      src={Icon}
      alt="cursor gif"
      className="fixed z-50 pointer-events-none w-[72px] h-[72px] transition-all duration-100 ease-linear"
      style={{
        left: adjustedPosition.x,
        top: adjustedPosition.y,
        transform,
      }}
    />
  );
};

export default CursorIcon;
