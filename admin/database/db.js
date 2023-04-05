const mongoose = require('mongoose')
const url = 'mongodb+srv://Nijat:gXIlfSzMfJdpsrxd@cluster0.7gksg.mongodb.net/ExpressDB?retryWrites=true&w=majority'

// mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect(url)
const connetction = mongoose.connection

module.exports = connetction