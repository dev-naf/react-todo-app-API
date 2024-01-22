let mysql = require('mysql')

let connection = mysql.createConnection({
    host: '192.168.1.100',
    port: 3306,
    user: 'admin',
    password: '123',
    database : 'Todo-List-Dummy-API'
})

connection.connect(error => {
    if(!!error) console.log(`DB ERROR with on ${error}`)
    else console.log('DB connect !')
})


module.exports = connection