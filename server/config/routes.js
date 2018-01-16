var users =require('./../controllers/usercontroller.js');
module.exports = function(app){
    app.get('/', function(req,res){
       users.showAll(req,res);
    });
    app.get('/:username', function(req, res) {
        users.show_one(req,res);
    });
    app.get('/new/:username',function(req,res){
        users.create(req,res);
    });
    app.get('/remove/:username', function(req, res) {
        users.remove(req,res);
    });
    
};