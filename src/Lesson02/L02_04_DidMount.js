import React, { useEffect, useState } from "react";
import { L02_04_DidMountUsers } from "./L02_04_DidMountUsers";

export const L02_04_DidMount = () => {
  const [type, setType] = useState("users");
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState({
    users: 0,
    todos: 0,
    posts: 0,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => setUsers(json));

    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((json) => setTodos(json));

    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  useEffect(() => setTotal({ users: users.length, todos: todos.length, posts: posts.length }), [todos, posts, users]);

  const curentStateResource = (type) => (type === "users" ? [users, setUsers] : type === "todos" ? [todos, setTodos] : type === "posts" ? [posts, setPosts] : [null, null]);

  const deleteElement = (state, key = 0) => {
    let temporary = [...state];
    temporary.splice(key, 1);
    curentStateResource(type)[1](temporary);
  };

  return (
    <>
      <div className="card bg-light mb-3 shadow " style={{ width: "90%", height: "500px", overflow: "auto" }}>
        <div className="card-body">
          <h4> Ресурс: {type}</h4>
          <button onClick={() => setType("users")} className="btn btn-outline-info mr-1">
            Пользователи, всего {total.users}
          </button>
          <button onClick={() => setType("todos")} className="btn btn-outline-info mr-1">
            Todo, всего {total.todos}
          </button>
          <button onClick={() => setType("posts")} className="btn btn-outline-info mr-5">
            Посты, всего {total.posts}
          </button>
          <button onClick={() => deleteElement(curentStateResource(type)[0], 0)} className="btn btn-outline-danger" disabled={total[type] == 0 ? "disabled" : ""}>
            Удалить первый элемент {type}, осталось {total[type]}.
          </button>
          {type == "users" ? <L02_04_DidMountUsers state={curentStateResource(type)[0]} setState={curentStateResource(type)[1]} deleteElement={deleteElement} /> : null}
          {type == "todos" ? <pre>{JSON.stringify(curentStateResource(type)[0], null, 2)}</pre> : null}
          {type == "posts" ? <pre>{JSON.stringify(curentStateResource(type)[0], null, 2)}</pre> : null}
        </div>
      </div>
    </>
  );
};
