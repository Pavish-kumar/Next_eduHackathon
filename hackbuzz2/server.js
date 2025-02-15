require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express')

const app = express()
// mongoose.connect(process.env.MONGO_URL)
// const db = mongoose.connection;
// db.on('error', (error) => console.log(error))
// db.once('open', ()=> console.log('Connected to database'))




app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/' , (req, res) =>{
    res.render('index.ejs')
})

app.get('/login', (req, res) =>{
    res.render('login.ejs')
})

 
app.get('/register', (req, res) =>{
    res.render('register.ejs')
})


app.get('/home', (req, res) =>{
    res.render('home.ejs')
})
// app.post('/register', (req, res) =>{
    
// })




app.listen(5000)