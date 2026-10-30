const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to DevReview AI Backend!");
});

app.listen(PORT, () => {
  console.log(`DevReview AI server running on port ${PORT}`);
});