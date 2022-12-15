const list = [
    {id: 1,
name:'Usik',
age: 900},
{id:2,
name:'rusik',
age:45},
{id:3,
name:'bostan',
age:50}
]


const express = require('express');
const app = express();

app.get('/list', function (req, res) {
  res.send(list);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});