const DbModel = require("../model/todoModel");

const allTodo = async (req, res) => {
  try {
    const newData = await DbModel.find();
    await res.status(200).json({newData});
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getTodoByID = async (req, res) => {
  // Get by objID
  const { id } = req.params;
  try {
    const newData = await DbModel.findById(id);
    res.status(200).json({ newData });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const delTodoById = async (req, res) => {
  // Del by ID
  const { id } = req.params;
  try {
    const newData = await DbModel.findByIdAndDelete(id);
    res.status(200).json({ msg: "del OK" });
  } catch (err) {
    res.status(500).json({ error });
  }
};

const updateTodoById = async(req, res) => {
  const { id } = req.params;
  const { todo } = req.body;
  console.log(todo)
  try {
    const newData = await DbModel.findByIdAndUpdate(id, {
        TODO:todo
    })
    res.status(200).json({status : "ok"});
} catch (error) {
    res.status(500).json({ error });
  }
};

const addTodo = async (req, res) => {
  // Post Data
  const { todo, date, check } = req.body;
  try {
    const newData = await DbModel.create({
      TODO: todo,
      DATE: date,
      STATUS: check,
    });
    res.status(201).json({ msg: "new todo saved!" });
  } catch (error) {
    console.log(error);
    res.status(500).send("ERROR ADDING DATA");
  }
};

const checkTodo = async(req, res) => {
  const { id } = req.params;
  try{
    await DbModel.findByIdAndUpdate(id, {
        STATUS : true
    })
    res.status(200).json({ status : 'OK' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const uncheckTodo = async(req, res) => {
    const { id } = req.params;
    try{
      await DbModel.findByIdAndUpdate(id, {
          STATUS : false
      })
      res.status(200).json({ status : 'OK' });
    } catch (error) {
      res.status(500).json({ error });
    }
  };

module.exports = {
  allTodo,
  getTodoByID,
  delTodoById,
  updateTodoById,
  addTodo,
  checkTodo,
  uncheckTodo,
};
