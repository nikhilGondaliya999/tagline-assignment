import React from "react";
import "./table.css";

function TableComponent(props) {
  const data = props.data;
  console.log("asd====>", data.length);
  return (
    <div>
      <table>
        <tr className="headerRow">
          <th>id</th>
          <th>Name</th>
          <th>City</th>
          <th>Category</th>
          <th>Type</th>
          <th>Active</th>
        </tr>
        {data.length === 0 ? (
          <p>
            No Data Found
          </p>
        ) : (
          <>
            {data.map((item, index) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.city}</td>
                  <td>{item.category}</td>
                  <td>{item.type}</td>
                  <td>{item.active === false ? "False" : "True"}</td>
                </tr>
              );
            })}
          </>
        )}
      </table>
    </div>
  );
}

export default TableComponent;
