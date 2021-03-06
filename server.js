
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .get('/simpliest', (req, res) => {
    const example = {
      variable: 'temperature',
      fields: {
        value: 34.32,
        quality: 12,
      },
      tags: {
        equipementPath: 'SiteA/Line1/WorkUnit3',
        ID: 'Sensor1',
      },
      timestamp: '2000-01-23T04:56:07.000+00:00',
    };

    res.json(example);
  });

app
  .post('/simpliest', (req, res) => {
    res.json(req.body);
  });

app.listen(port);

console.log(`RESTful API server started on: ${port}`);

module.exports = app;
