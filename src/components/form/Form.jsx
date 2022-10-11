import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// import { v4 as uuid } from "uuid";
import { addTodo } from "../../redux/modules/todoList";

function Form() {
  // const id = uuid();
  // console.log(todos);
  const todos = useSelector((state) => state.todoList.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({});
  const changeHandler = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setTodo({
      ...todo, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  // console.log(todos[1]);
  // const changeStyle = () => {
  //   setStyle("add-form-change");
  // };

  const handleAddToDo = (e) => {
    e.preventDefault();
    if (todo.title === "" || todo.body === "") return;

    //id: todos[todos.length - 1]?.id + 1 || 0
    dispatch(
      addTodo({
        ...todo,
        id: todos[todos.length - 1]?.id + 1 || 0,
        title: todo.title,
        body: todo.body,
        isDone: false,
      })
    );
    setTodo({
      id: "",
      title: "",
      body: "",
      isDone: false,
    });
  };
  // console.log("todos", todos);
  // console.log("todo", todo);
  // const clickHandler = () => {
  //   handleAddToDo();
  //   changeStyle();
  // };
  return (
    <StAddForm onSubmit={handleAddToDo}>
      <StInputGroupdiv>
        <StFormLabel htmlFor="title">할 일</StFormLabel>
        <StAddInput
          id="title"
          type="text"
          name="title"
          onChange={changeHandler}
          value={todo.title || ""}
        />
        <StFormLabel htmlFor="body">내용</StFormLabel>
        <StAddInput
          id="body"
          type="text"
          name="body"
          onChange={changeHandler}
          value={todo.body || ""}
        />
        <StAddButton type="submit">추가하기</StAddButton>
      </StInputGroupdiv>
    </StAddForm>
  );
}

export default Form;

const StInputGroupdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

const StAddForm = styled.form`
  background-color: #c8e6c9;
  border-radius: 12px;
  margin: 50px auto;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
  transition: 0.5s;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
  background-color: #fff;
  color: #333;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: #fff;
  width: 140px;
  color: #333;
  font-weight: bold;
  transition: 0.5s;
  border: 2px solid transparent;
  :hover {
    background-color: #c8e6c9;
    border: 2px solid #fff;
    color: #333;
    font-weight: bold;
    transition: 0.5s;
  }
`;
