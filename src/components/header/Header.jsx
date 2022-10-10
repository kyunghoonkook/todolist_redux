import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StContainerDiv>
      <div>
        <StTitle>My Todo List</StTitle>
      </div>
    </StContainerDiv>
  );
}

export default Header;

const StContainerDiv = styled.div`
  background-color: #3d4e3e;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 20px auto;
  border-radius: 10px;
`;

const StTitle = styled.p`
  font-weight: bold;
  color: #fff;
`;
