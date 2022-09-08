const router = require("express").Router();
const Notes = require("../model/noteModel");
let count =0;
router.route('/')


.get((req, res)=>
{ Notes.find({}, (err, notes)=>{
  if (err) throw err;
  res.send(notes);
}
)
})
.post((req, res) =>{
    const key = count++;
    const title = req.body.title;
    const content = req.body.content;
    const myNote = new Notes({
      key,
      title,
      content
    })
   myNote.save();
})

.delete((req,res,next)=>{
  const val = req.body.val;
    Notes.deleteMany({key:val}, (err,data)=>{})
})


module.exports = router;
