import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todoList";

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todoList.todo);
  console.log(todo);
  // const todos = useSelector((state) => state.todo.todo);
  // 특정 id의 콘텐츠를 받아오기
  const { id } = useParams();
  //Params = 스트링
  // console.log(typeof id);
  //  title, body;
  const navigate = useNavigate();
  // console.log("to", todo);
  // console.log("t", todos);

  useEffect(() => {
    dispatch(getTodoByID(id));
  }, [dispatch, id]);

  return (
    <StContainer>
      <StDiv>
        <div>
          <TextWrap>
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
          </TextWrap>
        </div>
      </StDiv>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const StDiv = styled.div`
  width: 500px;
  height: 300px;
  border: 2px solid #ff867c;
  border-radius: 1.75em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 8px 35px rgb(0 0 0 / 15%);
  }
  ::after {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    left: -185%;
    top: -185%;
    background-color: #ff867c;
    transition: all 1.5s;
    transform: rotate(35deg);
  }
  &:hover::after {
    background-color: #ff867c;
    left: -20%;
    top: -20%;
  }
  &:hover h1,
  &:hover main {
    color: #fff;
    transition: all 0.5s;
  }
`;

const StHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  width: 450px;
`;

const TextWrap = styled.div`
  position: absolute;
  z-index: 100;
`;
const StTitle = styled.h1`
  padding: 0 24px;
  margin-bottom: 2em;
  transition: all 4s;
`;

const StBody = styled.main`
  padding: 0 24px;
  transition: all 4s;
`;

const StButton = styled.button`
  border: 1px solid #ff867c;
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;
`;
