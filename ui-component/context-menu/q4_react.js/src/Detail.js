import React from "react";

const Detail = ({ text, context, onClick }) => (
  <details onClick={onClick}>
    <summary>{text}</summary>
    <p>{context}</p>
  </details>
);
export default Detail;
