const express = require('express');
const connectDb = require('./db.js');
const bodyParser = require('body-parser');
const cors  = require('cors');
const booksRouters = require('./routes/booksRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

const app = express();

const PORT = process.env.PORT||5000;

connectDb();

app.use(cors());
app.use(bodyParser.json());

app.use('/',userRoutes);
app.use('/books',booksRouters);

app.listen(PORT,()=>{
  console.log(`Server is running on port:${PORT}`);
})

