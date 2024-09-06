import "./App.css";
import { useState } from "react";
import Child from "./Child";

const App = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [contextId, setContextId] = useState(0);
  const [btn, setBtn] = useState(false);
  const [transId, setTransId] = useState(0);
  const [complete, setComplete] = useState([]);
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

  const onCheck = (id) => {
    setComplete((completeList) => {
      if (completeList.includes(id)) {
        return completeList;
      } else {
        return [...completeList, id];
      }
    });
  };

  return (
    <div className="OutlineBox">
      <input value={text} onChange={onChange} />
      {btn == false ? (
        <button onClick={onCreate}>추가</button>
      ) : (
        <button onClick={onTransform}>수정</button>
      )}
      <ul>
        {list.map((contextInform) => (
          <Child
            contextInform={contextInform}
            onTrue={onTrue}
            onRemove={onRemove}
            onCheck={onCheck}
            complete={complete.includes(contextInform.id)}
          ></Child>
        ))}
      </ul>
    </div>
  );
};

export default App;
