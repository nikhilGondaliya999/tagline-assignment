import React from "react";
import "./toggleButtom.css";

function ToggleButton(props) {
  return (
    <div className="form-check form-switch">
      <label className="switch">
        <input
          type="checkbox"
          onChange={props.onChange}
          checked={props.checked}
        />
        <span className="slider round"></span>
      </label>
      {props.label}
    </div>
  );
}

export default ToggleButton;
