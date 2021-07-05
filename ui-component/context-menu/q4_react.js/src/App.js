import React, { useState, useEffect } from "react";
import "./style.css";
import Detail from "./Detail";
import dummyData from "./dummyData";

const initOpenedIndex = null;

export default function App() {
  const [openedIndex, setOpen] = useState(initOpenedIndex);

  const togglePopover = index => e => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(openedIndex === index ? initOpenedIndex : index);
  };

  const closeAll = () => {
    setOpen(initOpenedIndex);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeAll);
    return () => {
      document.body.removeEventListener("click", closeAll);
    };
  });

  return (
    <div className="wrapper">
      {dummyData.map(({ text, context }, i) => (
        <Detail
          key={`detail${i}`}
          text={text}
          context={context}
          open={openedIndex === i}
          onToggle={togglePopover(i)}
        />
      ))}
    </div>
  );
}
