const express = require('express')
const cors = require('cors')
const route = require('./routes/todo-routes')
const mongoose = require('./config/mongoose')

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/todo',route)


// -- test -- 
app.get('/test', (req,res) => {
    res.send('hello world | test !')
})

app.listen(port, () => console.log(`server is run ! in ${port}`))