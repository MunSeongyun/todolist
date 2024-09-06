import React from "react";
import "./App.css";
const Child = ({ contextInform, onTrue, onRemove, onCheck, complete }) => {
  return (
    <li className="ChildBox">
      <p style={{ textDecoration: complete ? "line-through" : "none" }}>
        {contextInform.comment}
      </p>
      <div>
        <button
          className="ChildButton"
          onClick={() => onCheck(contextInform.id)}
        >
          완료
        </button>
        <button
          className="ChildButton"
          onClick={() => onTrue(contextInform.id)}
        >
          수정
        </button>
        <button
          className="ChildButton"
          onClick={() => onRemove(contextInform.id)}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default Child;
