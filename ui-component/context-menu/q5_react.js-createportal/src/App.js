import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import Detail from "./Detail";
import dummyData from "./dummyData";
import ContextPortal from "./ContextPortal";

export default function App() {
  const [openedIndex, setOpen] = useState(null);
  const detailRefs = useRef([]);

  const togglePopover = index => e => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(e.target.parentElement.open ? null : index);
  };

  const closeAll = () => {
    setOpen(null);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeAll);
    return () => {
      document.body.removeEventListener("click", closeAll);
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        {dummyData.map(({ text, context }, i) => (
          <Detail
            key={`detail${i}`}
            ref={r => (detailRefs.current[i] = r)}
            text={text}
            context={context}
            open={openedIndex === i}
            onToggle={togglePopover(i)}
          />
        ))}
      </div>

      <ContextPortal target={openedIndex !== null && detailRefs.current[openedIndex]} >
        {openedIndex !== null && <p>{dummyData[openedIndex].context}</p>}
      </ContextPortal>
    </>
  );
}
