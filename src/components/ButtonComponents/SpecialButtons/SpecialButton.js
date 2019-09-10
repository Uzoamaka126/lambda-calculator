import React from "react";

const SpecialButton = (props) => {
  const { special } = props; // the name of the props here has to agree with the name on line 25 in Number.js

  return (
    <>
      <button>{special} </button>{/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
export default SpecialButton;