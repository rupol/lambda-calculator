import React from "react";

export const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="number-btn" id={`number-btn-${props.id}`}>
        {props.text}
      </button>
    </>
  );
};
