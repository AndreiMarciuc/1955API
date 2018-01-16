var mongoose=require("mongoose");
var User = mongoose.model('User');

module.exports = {
    showAll:function(req,res){
        User.find({},function(err,users){
            res.json(users);
        });
    },
    show_one: function(req,res){
        User.findOne({name:req.params.username},function(err,user){
            if(err)
                
                res.json(err);
            else
                res.json(user);
        });
    },

    create:function(req,res){
        User.create({name: req.params.username},function(err,user){
            res.redirect('/');
        });
    },
    remove: function(req,res){
        User.remove({name:req.params.username},function(err,user){
            if(err)
                res.json(err);
            else
                res.json(user);
        });
    },
};