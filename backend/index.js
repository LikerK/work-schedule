import express from "express";

const app = express();

app.get('/days', (req, res) => {
  res.send('Ok!'); 
});

app.listen(3000);
