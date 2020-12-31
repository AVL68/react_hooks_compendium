import React from "react";
import IconsSVG from "../common/IconsSVG";


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
                <div>
                {row.id}
                </div>
                <a
                  className="bg bg-outline-primary"
                  onClick={() => {
                    deleteElement(state, key);
                  }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title={`Удалить: id ${row.id}`}
                  style={{ cursor: "pointer" }}
                >
                  <IconsSVG iconsID="bi-trash" width="0.8em" height="0.8em" className={"bi bi-trashi"}/>
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
