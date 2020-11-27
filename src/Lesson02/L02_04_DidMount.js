import React, { useEffect, useState } from "react";

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

  useEffect(() => setTotal({ users: users.length, todos: todos.length, posts: posts.length }), [users, todos, posts]);

  const deleteElement = (type) => {
    let temporary = [];
    switch (type) {
      case "users":
        temporary = [...users];
        temporary.splice(0, 1);
        setUsers(temporary);
        break;
      case "todos":
        temporary = [...todos];
        temporary.splice(0, 1);
        setTodos(temporary);
        break;
      case "posts":
        temporary = [...posts];
        temporary.splice(0, 1);
        setPosts(temporary);
        break;

      default:
        break;
    }
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
          <button onClick={() => deleteElement(type)} className="btn btn-outline-danger" disabled={total[type] == 0 ? "disabled" : ""}>
            Удалить первый элемент {type}, осталось {total[type]}.
          </button>
          <pre>{JSON.stringify(type === "users" ? users : type === "todos" ? todos : type === "posts" ? posts : [], null, 2)}</pre>
        </div>
      </div>
    </>
  );
};
