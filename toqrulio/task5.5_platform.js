const express = require('express');
const app = express();

const goods = [ 
    { "name": 'tablet', "price": "67", "amount": 5, "id": "0"  },
    { "name": 'vudi', "price": "10456", "amount": 0, "id": "1"  },
    { "name": 'razor', "price": "567", "amount": 4, "id": "2"  },
    { "name": 'palet', "price": "356", "amount": 3, "id": "3"  },
    { "name": 'brush', "price": "167", "amount": 8, "id": "4"  },
    { "name": 'cup', "price": "34", "amount": 9, "id": "5"  },
    { "name": 'life', "price": "566", "amount": 4, "id": "6"  },
    { "name": 'power', "price": "45", "amount": 1, "id": "7"  },
    { "name": 'skill', "price": "80", "amount": 6, "id": "8"  },
    { "name": 'chicken', "price": "7", "amount": 7, "id": "9"  }
];

 app.get('/products', function (req, res) {
    console.log(req.query);

  const count = parseInt(req.query.count);
  const offset = parseInt(req.query.offset);
  res.send({ goods: goods.slice(offset, offset + count), count: goods.length });


 });

 app.get('/products/:id', function (req, res) {
    let n = goods.find((item) => item.id == req.params.id)
    res.send(JSON.stringify(n));
 });

 app.get("/products/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const n = goods.find((item) => item.id === id);
  console.log(n)
  if (!n) {
     console.log(res.status(404).send())
  }
  else console.log(res.status(200).json(n))
 });

 app.listen(3000, function () {
  console.log('Let`s go');
 });