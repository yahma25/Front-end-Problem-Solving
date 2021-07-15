import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import Content from "./Content";
import "./style.css";

const pages = Array.from({ length: 8 }).map((_, i) => i + 1);

const App = () => {
  const [viewIndex, setViewIndex] = useState(0);
  const contentRef = useRef([]);
  const moveToPage = index => () => {
    setViewIndex(index);
    contentRef.current[index].scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  const scrollSpyObserver = new IntersectionObserver(
    entries => {
      const {target} = entries.find(entry => entry.isIntersecting);
      setViewIndex(contentRef.current.indexOf(target));
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    }
  );

  useEffect(() => {
    contentRef.current.forEach((item) => scrollSpyObserver.observe(item));
    return () => {
      contentRef.current.forEach((item) => scrollSpyObserver.unobserve(item));
    };
  }, []);

  return (
    <div id="app">
      <Nav pages={pages} viewIndex={viewIndex} moveToPage={moveToPage} />
      <div id="contents">
        {pages.map((p, i) => (
          <Content key={p} ref={(r) => (contentRef.current[i] = r)} page={p} />
        ))}
      </div>
    </div>
  );
};

export default App;
