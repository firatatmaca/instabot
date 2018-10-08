//https://github.com/huttarichard/instagram-private-api  
//https://www.npmjs.com/package/instagram-private-api
//https://github.com/totemstech/instagram-node
//https://dev.to/aurelkurtula/working-with-instagram-api-and-passportjs-in-a-node-application--5068

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    Task = require('./models/todoListModel'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/todoListRoutes');
routes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('instabot RESTful API server started on: ' + port);