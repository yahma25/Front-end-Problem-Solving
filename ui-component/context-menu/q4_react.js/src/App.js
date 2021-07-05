import React, {useEffect, useRef} from "react";
import "./style.css";
import Detail from "./Detail";
import dummyData from "./dummyData";

export default function App() {
  const latestOpenedRef = useRef(null);

  const closeDetail = () => {
    latestOpenedRef.current && latestOpenedRef.current.removeAttribute('open');
  };

  useEffect(() => {
    document.addEventListener('click', closeDetail);
    return () => document.removeEventListener('click', closeDetail);
  }, []);

  const handleClickDetail = e => {
    e.preventDefault();
    e.stopPropagation();

    const latestOpenedElem = latestOpenedRef.current;
    const currentTarget = e.currentTarget;

    closeDetail();

    if (latestOpenedElem !== currentTarget) {
      latestOpenedRef.current = currentTarget;
      currentTarget.setAttribute('open', '');

    } else {
      latestOpenedRef.current = null;
    }
  };

  return (
    <div className="wrapper">
      {dummyData.map(({ text, context }, i) => (
        <Detail
          key={`detail${i}`}
          text={text}
          context={context}
          onClick={handleClickDetail}
        />
      ))}
    </div>
  );
}
