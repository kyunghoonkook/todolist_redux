import React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import List from "../components/list/List";
import Form from "../components/form/Form";

function TodoList() {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
}

export default TodoList;
