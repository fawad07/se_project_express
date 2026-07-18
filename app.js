const express = require('express');

const app = express();
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
// Set port from environment or default to 3001
const { PORT = 3001 } = process.env;
// Connect DB
mongoose.connect('mongodb://localhost:27017/wtwr_db')
.then( () => {
    console.error("Connected to db");
})
.catch((e) => console.error(e));
// Basic route
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: '6a58ed3d2949db679f475619'
  };
  next();
});
app.use("/", indexRouter);
// Start the server
app.listen(PORT, () => {
    console.error(`Server is running on port ${PORT}`);
  });