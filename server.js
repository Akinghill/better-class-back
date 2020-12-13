if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const PORT = process.env.PORT;
const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userRoutes = require('./routes/user')

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
},
  () => { console.log("My database is connected"); }
);

app.use('/user', userRoutes)

app.listen(PORT, () => { console.log("Tiny electronic ears are listening on port " + PORT); });