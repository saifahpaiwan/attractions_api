var express = require('express') 
var app = express()
var cors = require('cors')
var mysql = require('mysql2') 

require('dotenv').config() 
app.use(cors())

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE

})

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.get('/attractions', function(req, res, next){
    pool.query('SELECT * FROM attractions', function(err, rows, fields){
        res.json(rows)
    })
})

app.listen(81, function () {
  console.log('CORS-enabled web server listening on port 81')
})