const Todo = require("../models/Todo");

const getTodo = async(req,res, next) =>{
    let todo;
    try{
        todo = await Todo.find();
    } catch(err){
        console.log(err);
    }
    if(!todo){
        return res.status(404).json({message:"No Todo's Found!"});
    }
    return res.status(200).json({todo});
};

const addTodo = async (req, res, next) => {
  const {text} = req.body;
  let todo;
  try {
    todo = new Todo({
        text
    });
    await todo.save();
  } catch (err) {
    console.log(err);
  }
  if (!todo) {
    return res.status(404).json({ message: "Unable to Add Book!" });
  }
  return res.status(200).json({ todo });
};

const updateTodo = async (req, res, next) => {
  const id = req.params.id;
  const { text } = req.body;
  let todo;
  try {
    todo = await Todo.findByIdAndUpdate(id,{
        text
    })
    await todo.save();
  } catch (err) {
    console.log(err);
  }
  if (!todo) {
    return res.status(404).json({ message: "Unable to Update!" });
  }
  return res.status(200).json({ todo });
};

const deleteTodo = async (req, res, next) => {
  const id = req.params.id;
  let todo;
  try {
    todo = await Todo.findByIdAndRemove(id);
    await todo.save();
  } catch (err) {
    console.log(err);
  }
  if (!todo) {
    return res.status(404).json({ message: "Unable to Delete!" });
  }
  return res.status(200).json({ todo });
};


module.exports = {getTodo, addTodo, updateTodo, deleteTodo};