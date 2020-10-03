const Express = require("express");
const mongo = require("./services/MongoService");
let app = express();

// Setup DB
mongo.openConnection();

//printing logs
var log = function(logMessage) {
        var time = moment().format()
        console.log('[' + time + ']' + '' + logMessage)
    }
    //direct app to fetch relevant files
app.use(express.static(__dirname + '/Public'));
//set endpoint to html file
app.get('/Game', function(req, res) {
    res.sendFile(__dirname + '/Public/HomePage.html');

});
//port
let port = 3000;
app.listen(port)
log(' Server listening on http://' + "localhost" + ':' + port + "/game")