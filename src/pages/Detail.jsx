import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todos";

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  // const todos = useSelector((state) => state.todo.todo);
  // 특정 id의 콘텐츠를 받아오기
  const { id } = useParams();

  //  title, body;
  const navigate = useNavigate();
  console.log("to", todo);
  // console.log("t", todos);

  useEffect(() => {
    dispatch(getTodoByID(id));
  }, [dispatch, id]);

  return (
    <StContainer>
      <StDiv>
        <div>
          <StHeader>
            <div>ID :{id}</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </StButton>
          </StHeader>

          <StTitle>할 일 : {todo.title}</StTitle>
          <StBody>내용 : {todo.body}</StBody>
        </div>
      </StDiv>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDiv = styled.div`
  width: 600px;
  height: 400px;
  border: 2px solid #5c695c;
  border-radius: 1.75em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
  margin-bottom: 2em;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid #5c695c;
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #5c695c;
    color: #fff;
  }
`;
