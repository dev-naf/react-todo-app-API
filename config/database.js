let mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '123',
    database : 'Todo-List-Dummy-API'
})

connection.connect(error => {
    if(!!error) console.log(`DB ERROR with on ${error}`)
    else console.log('DB connect !')
})


module.exports = connection