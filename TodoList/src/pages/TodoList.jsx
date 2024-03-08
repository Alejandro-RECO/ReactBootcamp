import React from "react";
import '../styles/todoList.css'

import { todos } from "../utils/todos";

import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

const TodoList = () => {
  return (
    <Layout 
      title={"TODO LIST"}
      nameLink={'New Todo'}
      to={'/new-todo'}
      >
          {
            todos.map(item => (
              <Link key={item.id} className="todo-link"  to={'/details-todo'}>
                <div  className="todo-card">
                  <h2>{item.title}</h2>
                  <span>X</span>
                </div>
              </Link>
            ))
          }
    </Layout>
  );
};

export default TodoList;
