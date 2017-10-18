const express = require('express');
var app = express();
app.set('view engine', 'ejs');

//Routes

// home
app.get('/', function (req, res) {
    res.render('home', {
        seasons: ['Season 1', 'Season 2', 'Season 3', 'Season 4']
    });
});

// seasons
app.get('/seasons/:season_number?', function (req, res) {
    var season_number = req.params.season_number;
    res.send(`This is the page for season ${season_number}`);
});

// notFound
app.get('*', function (req, res) {
    res.send('Sorry, this is not the page you are looking for...');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});