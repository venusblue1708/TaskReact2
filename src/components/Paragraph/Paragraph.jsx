import React, { useState } from "react";

const Paragraph = (props) => {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (!text) {
      alert("ВВЕДИТЕ ТЕКСТ");
      return;
    }

    const newObj = {
      text: text,
      id: Date.now(),
    };
    props.handleParagraph(newObj);

    setText("");
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleAdd}>SAVE</button>
    </div>
  );
};

export default Paragraph;
