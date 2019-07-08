const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();
const Items = require('../database/index.js');

app.use(parser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(parser.json());
// app.use(express.static(path.join(__dirname,'../client/dist')));

app.get('/api/items', (req, res) => {
  Items
    .find({})
    .then( (data) => {
      res.status(200).send(data.sort((a, b) => { return a.id - b.id }));
    })
    .catch( (err) => {
      res.status(404).send(err);
    });
});

app.delete('/api/items', (req, res) => {
  const {itemType} = req.query;
  Items
    .deleteMany({itemType})
    .then( () => {
      res.status(200).send('successfully deleted data');
    })
    .catch( (err) => {
      res.status(404).send('error deleting data', err);
    })
})

const port = 2255;

app.listen(port, () => {console.log(`server running on port ${port}`)});