import React from "react";

interface Props {
  handleClick?: () => void;
}

function Supply({ handleClick }: Props = {}) {
  return (
    <div
      style={{
        width: "15vw",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button style={{ width: "80%", height: "10vh" }} onClick={handleClick}>
        Place Piece
      </button>
    </div>
  );
}

export default Supply;
