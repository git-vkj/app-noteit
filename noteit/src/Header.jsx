import React from "react";


function Header()
{const time = new Date().getHours();
const now = new Date().toLocaleDateString("en-US",
  {  weekday:"long",
    day:"numeric",
    month:"long"}
);
const myStyle = {
    backgroundImage : ""
}
if (time<11)
 myStyle.backgroundImage = "linear-gradient(to right, #8e2de2, #4a00e0)";
else if (time>11 && time<17)
    myStyle.backgroundImage = "linear-gradient(to right, #00b4db, #0083b0)";
else
      myStyle.backgroundImage ="linear-gradient(to right, #0f0c29, #302b63, #24243e)";
  return (
   <header style = {myStyle}>
   <h1>NoteIt</h1>
   <p>{now}</p>
   </header>
  )
}

export default Header;
