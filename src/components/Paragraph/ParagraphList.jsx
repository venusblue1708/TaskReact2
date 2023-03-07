import React from "react";

const ParagraphList = (props) => {
  return (
    <div>
      <h2>Paragraph List component</h2>
      {props.paragraph.map((item) => (
        <p key={item.id}>{item.text}</p>
      ))}
    </div>
  );
};

export default ParagraphList;
