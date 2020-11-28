import React from "react";

export const L02_04_DidMountUsers = ({ state = [], deleteElement = null }) => {
  return (
    <table className="table table-bordered table-hover " style={{ marginTop: 10 }}>
      <thead>
        <tr className="table-secondary">
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">username</th>
          <th scope="col">email</th>
          <th scope="col">address</th>
          <th scope="col">phone</th>
        </tr>
      </thead>
      <tbody>
        {state.map((row, key) => {
          return (
            <tr key={row.id}>
              <th scope="row" style={{ textAlign: "center" }}>
                {row.id}
                <a
                  className="badge badge-outline-primary"
                  onClick={() => {
                    deleteElement(state, key);
                  }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title={`Удалить: id ${row.id}`}
                  style={{ cursor: "pointer" }}
                >
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </a>
              </th>
              <td>{row.name}</td>
              <td>{row.username}</td>
              <td>{row.email}</td>
              <td>{row.address.street + "," + row.address.suite + "," + row.address.city + "," + row.address.zipcode}</td>
              <td>{row.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
