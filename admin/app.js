const express = require('express');
const app = express();

const connection = require('./database/db')
connection.once('open', () => console.log('Connection MongoDB'))
connection.on('error', () => console.log(error))

//AdminBro
const AdminBro = require('admin-bro')
const expressAdminBro = require('@admin-bro/express')
const mongooseAdminBro = require('@admin-bro/mongoose')

//Model
const User = require('./models/Book')
const Post = require('./models/Post')


AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {resources: [Book,Post]}

const adminBro = new AdminBro(AdminBroOptions)
const router = expressAdminBro.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

app.get('/', (req,res) => {
    res.send('dashboard connect')
})

app.listen(3001, () => {
    console.log('server up http://localhost:3002/admin');
})