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
            onChange={(e) => props.handleTableData(e, "cities", "dallas")}
            checked={props.tableData.cities.includes("dallas")}
          />
          <ToggleButton
            label="san francisco"
            onChange={(e) =>
              props.handleTableData(e, "cities", "san francisco")
            }
            checked={props.tableData.cities.includes("san francisco")}
          />
          <ToggleButton
            label="denver"
            checked={props.tableData.cities.includes("denver")}
            onChange={(e) => props.handleTableData(e, "cities", "denver")}
          />
        </div>
      </div>
      <div className="filterToggleBox">
        <h2>category</h2>
        <div className="toggleBtnBox">
          <ToggleButton
            label="One "
            checked={props.tableData.categories.includes("one")}
            onChange={(e) => props.handleTableData(e, "categories", "one")}
          />
          <ToggleButton
            label="Two"
            checked={props.tableData.categories.includes("two")}
            onChange={(e) => props.handleTableData(e, "categories", "two")}
          />
        </div>
      </div>
      <div className="filterToggleBox">
        <h2>type</h2>
        <div className="toggleBtnBox">
          <ToggleButton
            label="A"
            checked={props.tableData.types.includes("a")}
            onChange={(e) => props.handleTableData(e, "types", "a")}
          />
          <ToggleButton
            label="B"
            checked={props.tableData.types.includes("b")}
            onChange={(e) => props.handleTableData(e, "types", "b")}
          />
          <ToggleButton
            label="C"
            checked={props.tableData.types.includes("c")}
            onChange={(e) => props.handleTableData(e, "types", "c")}
          />
        </div>
      </div>
      <div className="filterToggleBox">
        <h2>active</h2>
        <div className="toggleBtnBox">
          <ToggleButton
            label="False"
            checked={props.tableData.activeStates.includes("false")}
            onChange={(e) => props.handleTableData(e, "activeStates", "false")}
          />
          <ToggleButton
            label="True"
            checked={props.tableData.activeStates.includes("true")}
            onChange={(e) => props.handleTableData(e, "activeStates", "true")}
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
