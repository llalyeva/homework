const express = require('express');
const app = express();

const cards = [ 
  { number: "9378659", id: 1 },
  { number: "1-240832948", id: 2 },
  { number: "8203948230", id: 3 },
  { number: "5230948", id: 4 },
  { number: "2-34090-2", id: 5 },
 ];
 app.get('/card/:id', function (req, res) {
  res.send(JSON.stringify(cards.find((card) => card.id == req.params.id)));
});
app.get("/card/:id", function (req, res) {
  const idOfcard = parseInt(req.params.id);
  const c = cards.find((c) => c.id === idOfcard);
  if (!c) {
    res.status(404).send();
  }
  res.status(200).json(c);
});

app.listen(3000, function () {
  console.log('let`s go');
});