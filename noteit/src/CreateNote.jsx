import React,{useState} from "react";
import axios from "axios";

function CreateNote (props)
{

    const [note , setNote] =  useState({
      title : "",
      content:""
    })

    function trackChanges(event)
    {
          const {name, value } = event.target;
          setNote (lastnote => {
              return {...lastnote, [name]:value}
          })
    }

    function attachNote(event)
    {
      setNote({
        title:"",
        content:""
      })
      event.preventDefault();
     if(note.title!==""  && note.content!=="")
     {
      axios.post("/", note);
      props.onAdd(note);
     }


    }

   return   (
          <div>
            <form>
              <input type="text" name = "title" onChange={trackChanges} placeholder="Note Title" value = {note.title}/>
              <textarea name ="content" onChange={trackChanges} placeholder="Write content here..." rows="4" value ={note.content} />
              <button onClick = {attachNote}>+</button>
            </form>
          </div>
   )
}


export default CreateNote;
