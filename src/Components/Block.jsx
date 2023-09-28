import React from "react";

const Block = ({ onClick, element }) => {
  return (
    <div
      onClick={onClick}
      style={{
        color:"white",
        border: "4px solid black ",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "900",
        fontSize: "3rem",
        fontFamily:"cursive"
      }}
      className="block"
    >
      {element}
    </div>
  );
};

export default Block;
