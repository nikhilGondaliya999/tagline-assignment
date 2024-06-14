import React from "react";
import "./filter.css";
import ToggleButton from "../commonComponets/toggleButton";

function FilterComponent(props) {
  return (
    <div className="filterMainBox">
      <div className="filterToggleBox">
        <h2>City</h2>
        <div className="toggleBtnBox">
          <ToggleButton
            label="dallas"
            onChange={(e) => props.handleTableData(e, "city", "dallas")}
            checked={props.tableData.city.includes("dallas")}
          />
          <ToggleButton
            label="san francisco"
            onChange={(e) => props.handleTableData(e, "city", "san francisco")}
            checked={props.tableData.city.includes("san francisco")}
          />
          <ToggleButton
            label="denver"
            checked={props.tableData.city.includes("denver")}
            onChange={(e) => props.handleTableData(e, "city", "denver")}
          />
        </div>
      </div>
      <div className="filterToggleBox">
        <h2>category</h2>
        <div className="toggleBtnBox">
          <ToggleButton
            label="One "
            checked={props.tableData.category.includes("one")}
            onChange={(e) => props.handleTableData(e, "category", "one")}
          />
          <ToggleButton
            label="Two"
            checked={props.tableData.category.includes("two")}
            onChange={(e) => props.handleTableData(e, "category", "two")}
          />
        </div>
      </div>
      <div className="filterToggleBox">
        <h2>type</h2>
        <div className="toggleBtnBox">
          <ToggleButton
            label="A"
            checked={props.tableData.type.includes("a")}
            onChange={(e) => props.handleTableData(e, "type", "a")}
          />
          <ToggleButton
            label="B"
            checked={props.tableData.type.includes("b")}
            onChange={(e) => props.handleTableData(e, "type", "b")}
          />
          <ToggleButton
            label="C"
            checked={props.tableData.type.includes("c")}
            onChange={(e) => props.handleTableData(e, "type", "c")}
          />
        </div>
      </div>
      <div className="filterToggleBox">
        <h2>active</h2>
        <div className="toggleBtnBox">
          <ToggleButton
            label="False"
            checked={props.tableData.active.includes("false")}
            onChange={(e) => props.handleTableData(e, "active", "false")}
          />
          <ToggleButton
            label="True"
            checked={props.tableData.active.includes("true")}
            onChange={(e) => props.handleTableData(e, "active", "true")}
          />
        </div>
      </div>
      <div className="filterToggleBox">
        <input
          placeholder="name"
          style={{ height: "20px" }}
          value={props.tableData.name}
          onChange={(e) => props.handleTableData(e, "name")}
        />
      </div>
    </div>
  );
}

export default FilterComponent;
