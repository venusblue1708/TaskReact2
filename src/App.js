import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import Employer from "./components/Employer/Employer";
import Paragraph from "./components/Paragraph/Paragraph";
import ParagraphList from "./components/Paragraph/ParagraphList";

const App = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }
  let [paragraph, setParagraph] = useState([]);
  const handleText = (newObj) => {
    let newText = [...paragraph];

    newText.push(newObj);
    setParagraph(newText);
  };
  const [users, setUsers] = useState([
    { key: 1, name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
    { key: 2, name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
    { key: 3, name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
    { key: 4, name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
    { key: 5, name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
    { key: 6, name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
    { key: 7, name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
    { key: 8, name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
    {
      key: 9,
      name: "Adilet",
      surname: "Gazybekov",
      days: 11,
      salaryPerDay: 16,
    },
    { key: 10, name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28 },
  ]);
  return (
    <div>
      <h4>Counter</h4>
      <h3>{counter}</h3>
      <Counter decrement={decrement} increment={increment} />
      <Paragraph handleParagraph={handleText} />
      <ParagraphList paragraph={paragraph} />
      <Employer users={users} />
    </div>
  );
};

export default App;
