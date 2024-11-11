const express = require('express');
const app = express();
const mongoose = require("mongoose")

// Set port from environment or default to 3001
const { PORT = 3001 } = process.env;

// Connect DB
mongoose.connect('mongodb://127.0.0.1:27017/wtwr_db')
.then( (() => {
    console.log("Connected to db");
})
.catch((e) => console.error(e)));

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });