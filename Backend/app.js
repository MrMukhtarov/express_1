const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const port = 3004;
const router = require('./routes/book-routes')

const app = express();

//Middlware
app.use(cors())
app.use(express.json())
app.use('/books',router)

mongoose.connect('mongodb+srv://Nijat:gXIlfSzMfJdpsrxd@cluster0.7gksg.mongodb.net/ExpressDB?retryWrites=true&w=majority')
.then(() => console.log('Connect Database...!'))
.then(() => {
    app.listen(port)
})
.catch((err) => console.log(err))

//ExpressDB
// app.listen(port, () => {
//     console.log(`Server is running port ${port}`);
// });