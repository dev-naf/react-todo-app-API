let mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: 'password',
    database : 'Todo-List-Dummy-API'
})

connection.connect(error => {
    if(!!error) console.log(`DB ERROR with on ${error}`)
    else console.log('DB connect !')
})


module.exports = connection