if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

// Controllers
const signin = require('./controllers/signin');
const register = require('./controllers/register');
const profile = require('./controllers/profile');
const auth = require('./controllers/authorization');

const PORT = process.env.PORT;
const app = express();

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL || process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
  },
  () => {console.log("My database is connected");}
);

app.listen(PORT, () => {console.log("Tiny electronic ears are listening on port " + PORT);});