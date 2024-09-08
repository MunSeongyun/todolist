import "./App.css";
import { useState } from "react";
import Child from "./Child";

const App = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [contextId, setContextId] = useState(0);
  const [btn, setBtn] = useState(false);
  const [transId, setTransId] = useState(0);

  // 현재 complete 배열을 만들어서 완료상태를 관리중인데, 
  // 이렇게 하면 계속 .includes 메소드를 써야함 .includes는 굉장히 느린 메소드니까,
  // 객체안에 complete 요소를 하나 만드는게 속도 면에서 유리할거 같음
  // 그리고 이렇게 배열을 두 개 만들면 json-server로 변경했을때도 데이터베이스 테이블을 2개 만들어야하는 문제가 있음
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
    // 여기 오류 뜬거 수정하려면 중괄호 없애면 됨

    // map 함수는 배열의 값 하나하나에다가 함수를 적용해서 그 리턴값을 모아서 새로운 배열을 만들때 쓰는거라서 
    // map보다는 forEach가 좋아보임
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
