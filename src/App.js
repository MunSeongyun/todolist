import "./App.css";
import { useState } from "react";

const App = () => {
  let [Text, setText] = useState("");
  let [List, setList] = useState([]);
  const onCreate = (e) => {
    const todo = {};
    setList([...Text, todo]);
  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>{setList}</h1>
      <input value={inputValue} onChange={onChange} />
      <button onClick={onCreate}>추가</button>
    </>
  );
};
export default App;
