import "./App.css";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [contextId, setContextId] = useState(0);

  const onCreate = () => {
    const contextInform = {
      id: contextId,
      text,
    };
    setList([...list, contextInform]);
    setText("");
    setContextId(contextId + 1);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onRemove = (id) => {
    setList(list.filter((contextInform) => contextInform.id !== id));
  };

  return (
    <>
      <input value={text} onChange={onChange} />
      <button onClick={onCreate}>추가</button>
      <ul>
        {list.map((contextInform) => (
          <p key={contextInform.id}>
            <span>{contextInform.text}</span>
            <button onClick={() => onRemove(contextInform.id)}>삭제</button>
          </p>
        ))}
      </ul>
    </>
  );
};

export default App;
