import React from "react";

const Task = (props) => {

  return (
    <li>
      {props.task}
	  <span
        type="button"
        onClick={() => {
          props.onDelete(props.id);
        }}
        className="delete-button"
      >
        <i className="fas fa-times newclas"></i>
      </span>
    </li>
  );
};

export default Task;
