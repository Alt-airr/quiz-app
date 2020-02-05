let express = require('express');
let app = express();
let cors = require('cors');
app.use(cors());
let data = require('./data/data.js');

app.get("/data", function(request, response){
    response.send(data.data)});


app.listen(3001, function() {
    console.log('App running on port 3001,');
});

