var connection = require('../config/database');

const allTodo = (req,res) =>{
    // res.send('All Todo')
    try{
        connection.query('SELECT * FROM data ORDER BY ID DESC',(error, data) => {res.json({data})})
    }catch(error){
        res.json({error})
    }
}

const getTodoByID = (req,res) => {
    const {id} = req.params
    try{
        connection.query(`select * from data where id = ${id}`,(error,data) =>{
            if(data.length == 1){res.json({data})}
            else{res.json({msg :'Data not found :-)'})}
        })
    }catch(err){
        res.json({err})
    }
}

const delTodoById = (req, res) => {
    const {id} = req.params
    try{
        connection.query(`delete from data where id = ${id}`, (error,data) =>{
            if (data.affectedRows == 1){
                res.send({msg : 'Data terhapus'})
            }else{
                res.send({msg : 'Data Tidak ditemukan !'})
            }
        })
    }catch(err){
        res.json({error})
    }
}

const updateTodoById = (req,res) => {
    const {id} = req.params
    const {todo} = req.body
    try{
        connection.query(`update data set TODO=\"${todo}\" where id=\"${id}\";`, (error, data) => {
            if (data.affectedRows == 1){
                res.json({msg :'Data was be changed !'})
            }else{
                res.json({msg :'Data cannot found !'})
            }
        })
        
    }catch(error){
        res.json({error})
    }
}

const addTodo = (req,res) => {
    const {todo, date, check} = req.body
    console.log(req.todo)
    try {
        connection.query(`insert into data values (NULL,\"${todo}\",\"${date}\", ${check});`,(error,data)=>{
            console.log(data)   
        })
        res.json({msg : 'new todo saved!'})
    } catch (error) {
        res.json({error})
    }
    
}

const checkTodo = (req,res) => {
    const {id} = req.params
    try {
        connection.query(`update data set STATUS=1 where ID=\"${id}\";`,(error,data) => {
            const  {affectedRows} = data
            if(affectedRows == 1) res.json({msg: "todo checked"})   
            else res.json({msg: "Data notfound"})
            
        }
        )
    } catch (error) {
        res.json({error})    
    }
    
}

const uncheckTodo = (req,res) => {
    const {id} = req.params
    try {
        connection.query(`update data set STATUS=0 where ID=\"${id}\";`,(error,data) => {
            const  {affectedRows} = data
            if(affectedRows == 1) res.json({msg: "todo unhecked"})   
            else res.json({msg: "Data notfound"})   
        }
        )
    } catch (error) {
        res.json({error})    
    }
}

module.exports = {allTodo,getTodoByID,delTodoById,
    updateTodoById,addTodo,checkTodo,uncheckTodo}