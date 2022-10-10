import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../redux/modules/todoList";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoList.todos);

  const DeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const ToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <StListContainer>
      <h2>Working.. 🔥</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (!todo.isDone) {
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
                  <StButton
                    backgrounColor="#ff867c"
                    onClick={() => DeleteTodo(todo.id)}
                  >
                    삭제하기
                  </StButton>
                  <StButton
                    backgrounColor="#73b072"
                    onClick={() => ToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </StButton>
                </StFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
      <h2 className="list-title">Done..! 🎉</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
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
                  <StButton
                    backgrounColor="#ff867c"
                    onClick={() => DeleteTodo(todo.id)}
                  >
                    삭제하기
                  </StButton>
                  <StButton
                    backgrounColor="#73b072"
                    onClick={() => ToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </StButton>
                </StFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </StListContainer>
  );
};

export default List;

const StListContainer = styled.div`
  padding: 10px 24px;
  border-radius: 10px;
  transition: 0.5s;
`;

const StListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  min-height: 150px;
  border: 3px solid #73b072;
  border-radius: 12px;
  padding: 15px 24px 24px 24px;
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
  background-color: ${({ backgrounColor }) => backgrounColor};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: #fff;
    border: 1px solid ${({ backgrounColor }) => backgrounColor};
    transition: all 0.5s;
    color: #232323;
  }
`;
