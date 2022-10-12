import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, toggleStatusTodo } from "../../redux/modules/todoList";
const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const deleteTodos = (id) => {
    dispatch(deleteTodo(id));
  };

  const toggleTodos = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <StTodoContainer key={todo.id}>
      <StLink to={`/${todo.id}`} key={todo.id}>
        <div>상세보기</div>
      </StLink>
      <StTextWrap>
        <h2 className="todo-title">할 일 : {todo.title}</h2>
        <div>내용 : {todo.body}</div>
      </StTextWrap>
      <StFooter>
        <RedButton onClick={() => deleteTodos(todo.id)}>삭제하기</RedButton>
        <GreenButton onClick={() => toggleTodos(todo.id)}>
          {todo.isDone ? "취소!" : "완료!"}
        </GreenButton>
      </StFooter>
    </StTodoContainer>
  );
};
export default Todo;

const StTodoContainer = styled.div`
  width: 270px;
  min-height: 150px;
  border: 3px solid #73b072;
  border-radius: 12px;
  padding: 15px 24px 24px 24px;
  transition: 0.5s;
  position: relative;
  bottom: 0;
  &:hover {
    box-shadow: 0 8px 22px rgb(0 0 0 / 15%);
    bottom: 2.5%;
  }
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: #232323;
  position: relative;
  ::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    bottom: -5px;
    background-color: #73b072;
    transition: all 0.5s;
    position: absolute;
    left: 0%;
  }
  :hover::after {
    width: 10%;
  }
`;

const StTextWrap = styled.div`
  margin-bottom: 15px;
`;

const StFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 10px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid transparent;
  font-weight: 700;
  color: #fff;
  height: 40px;
  width: 120px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: #fff;
    transition: all 0.5s;
    color: #232323;
  }
`;

// 오버라이딩
const RedButton = styled(StButton)`
  background-color: #ff867c;
  &:hover {
    border: 1px solid #ff867c;
  }
`;

const GreenButton = styled(StButton)`
  background-color: #73b072;
  &:hover {
    border: 1px solid #73b072;
  }
`;
