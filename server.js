'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var simpliestPoint = require('./controllers/simpliest');

//routes
//app.route('/simpliest')
//  .get(simpliestPoint.list_all_tasks)
//  .post(todoList.create_a_task);
//app.route('/tasks/:taskId')
//  .get(todoList.read_a_task)
//  .put(todoList.update_a_task)
//  .delete(todoList.delete_a_task);

app.get('/simpliest', (req, res) => {
  var example = {
    "variable" : "temperature",
    "fields" : {
      "value" : 34.32,
      "quality" : 12
    },
    "tags" : {
      "equipementPath" : "SiteA/Line1/WorkUnit3",
      "ID" : "Sensor1"
    },
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  };
  
  res.json(example);
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);