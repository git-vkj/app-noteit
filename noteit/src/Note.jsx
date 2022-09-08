import React from "react";
import axios from "axios";

function Note(props)
{

  function deleteNote()
  {
    props.onDelete(props.id);
       axios.delete("/",{data:{val:props.id}})

  }
  return(
   <div className="note">
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <button onClick = {deleteNote}>x</button>
   </div>
);
}


export default Note;
