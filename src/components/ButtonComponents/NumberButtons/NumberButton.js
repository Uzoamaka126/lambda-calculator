import React from "react";

const NumberButton = (props) => {
  const { number } = props; // the name of the props here has to agree with the name on line 25 in Number.js
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {number}
    </button>
  );
};

export default NumberButton;