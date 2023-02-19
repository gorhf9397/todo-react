import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

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
    // console.log(newTodos[index]);
    setTodos(newTodos);
  };
  // check된 할일 제거
  const handleCheckRemove = () => {
    const newTodos = [...todos];
    const falseArr = newTodos.filter((e) => !e.checked);
    // console.log(falseArr);
    setTodos(falseArr);
  };
  // useEffect 를 사용하여 컴포넌트 렌더링
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    setTodos(JSON.parse(storedTodos));
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // console.log(todos);
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <TextField
          id="outlined-basic"
          label="할 일을 입력해주세요."
          variant="outlined"
          size="small"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button variant="contained" type="submit">
          할일추가
        </Button>
      </form>
      <Button variant="contained" onClick={handleCheckRemove}>
        완료된 일 제거
      </Button>
      <ul>
        {/* 배열에 null or undifined 가 아닌지 확인 */}
        {todos &&
          todos.map((todo, index) => (
            <li key={index}>
              <div className={todo.checked ? "check" : ""}>{todo.text}</div>
              <Checkbox
                size="small"
                checked={todo.checked ? "checked" : ""}
                // 디스트럭처링
                onChange={({ target: { checked } }) =>
                  handleCheckBox(index, checked)
                }
              />
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={() => handleRemoveTodo(index)}
              >
                ❌
              </Button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ToDoList;
