import React from "react";

function Note(props) {
  return (
    <div className="note">

      <div className="itens-note">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>


    </div>
  )
}
export default Note;