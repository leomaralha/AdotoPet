const express = require('express')
const routes = require ('./routes')
const mongoose = require('mongoose')

const app = express();
mongoose.connect('mongodb+srv://eduardoffelipe:eduardo..@cluster0-gfbg9.mongodb.net/Adotopet?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

app.use(express.json())
app.use(routes)

app.listen(3333)
