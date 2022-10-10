import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return <StLayoutDiv>{children}</StLayoutDiv>;
}

export default Layout;
const StLayoutDiv = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
