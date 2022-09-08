import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote"

function App()
{
   const [allnotes, setNotes] = useState([]);


   useEffect (()=>{
     fetch('http://localhost:5000')
     .then(res =>{
       return res.json()
     }).then(data =>(setNotes(data))
   )}

   ,[])


  function addNote(note)
  {
  //    console.log(note);
    setNotes (lastNotes => {
      return [...lastNotes, note]
    } )
  }

  function deleteMyNote(id)
  {
    //   console.log("deleted", id);
       setNotes(lastNotes => {
         return lastNotes.filter((singleNote,index)=>{
           return index !== id;
         })
       })


  }

  //console.log(mynotes.title);
   return (
     <div>
      <Header />
        <CreateNote onAdd ={addNote} />
          {  allnotes.map((singleNote,index) => {
                return <Note
                        key = {singleNote.key}
                        id  = {index}
                        title = {singleNote.title}
                        content = {singleNote.content}
                        onDelete = {deleteMyNote} />

            })}

      <Footer />

      </div>
   )

}

export default App;
