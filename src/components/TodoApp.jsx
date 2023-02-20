import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import TodosLogic from "./TodosLogic";
import Modal from "./Modal";

const TodoApp = () => {
    return (
      <>
        <Navbar />
        <Header />
        <TodosLogic />
      </>
    );
  };
  export default TodoApp;
  