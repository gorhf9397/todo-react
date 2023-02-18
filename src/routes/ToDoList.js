import React, { useEffect, useState } from "react";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    // input 에 text가 빈칸이 아닐때.
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
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
  
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">할일추가</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleRemoveTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
