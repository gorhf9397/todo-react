import React, { useEffect, useState } from "react";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
  };

  //Todo 추가
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }
    // input 에 text가 빈칸이 아닐때.
    setTodos([...todos, { text: inputValue }]);
    setInputValue("");
  };

  // Todo 삭제
  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  // 완료한 Todo 체크박스
  const handleCheckBox = (index, checked) => {
    // spread 연산자 사용
    const newTodos = [...todos];
    newTodos[index].checked = checked;
    console.log(newTodos[index]);
    setTodos(newTodos);
  };

  // useEffect 를 사용하여 컴포넌트 렌더링
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    setTodos(JSON.parse(storedTodos));
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="할일을 입력해주세요"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">할일추가</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div className={todo.checked ? "check" : ""}>{todo.text}</div>
            <input
              type="checkbox"
              checked={todo.checked ? "checked" : ""}
              onChange={({ target: { checked } }) =>
                handleCheckBox(index, checked)
              }
              // 디스트럭처링
            />
            <button onClick={() => handleRemoveTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
