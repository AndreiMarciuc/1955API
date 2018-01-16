var express = require("express"),
    app = express(), 
    bp=require("body-parser"),
    path=require("path"),
    session= require("express-session"),
    port=8000;

app.use(express.static(path.join(__dirname,"/client")));
app.use(bp.json());
app.use(session({secret: "secret key"}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port,function(){
    console.log("listening on localhost:8000");
});