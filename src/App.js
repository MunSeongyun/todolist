import "./App.css";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [contextId, setContextId] = useState(0);
  const [btn, setBtn] = useState(false);
  const [transId, setTransId] = useState(0);
  const onCreate = () => {
    const contextInform = {
      id: contextId,
      comment: text,
    };
    setList([...list, contextInform]);
    setText("");
    setContextId(contextId + 1);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onRemove = (id) => {
    setList(list.filter((context) => context.id !== id));
  };

  const onTrue = (id) => {
    setTransId(id);
    setBtn(true);
  };

  const onTransform = () => {
    {
      list.map((user) =>
        user.id == transId ? (user.comment = text) : transId
      );
    }
    setText("");
    setBtn(false);
  };

  return (
    <>
      <input value={text} onChange={onChange} />

      {btn == false ? (
        <button onClick={onCreate}>추가</button>
      ) : (
        <button onClick={onTransform}>수정</button>
      )}
      <ul>
        {list.map((contextInform) => (
          <p key={contextInform.id}>
            <span>{contextInform.comment}</span>
            <button onClick={() => onTrue(contextInform.id)}>수정</button>
            <button onClick={() => onRemove(contextInform.id)}>삭제</button>
          </p>
        ))}
      </ul>
    </>
  );
};

export default App;
