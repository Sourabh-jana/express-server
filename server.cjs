const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Your server is working fine!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
