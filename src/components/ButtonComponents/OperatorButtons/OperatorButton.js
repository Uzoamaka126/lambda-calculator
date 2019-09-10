import React from "react";

const OperatorButton = (props) => {
  // const {operator } = props; 
  // the name of the props here has to agree with the name on line 25 in Number.js

  return (
    <div>
      {
        <button>{props.char}</button>
      }
    </div>
  );
};
export default OperatorButton;