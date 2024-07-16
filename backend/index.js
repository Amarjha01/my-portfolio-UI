// backend/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "frontend")));

// MongoDB Connection
// const uri = "your_mongodb_connection_string";
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// });

// API routes
// app.get('/', (req, res) => {
//   res.send('Hello from the backend!');
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
