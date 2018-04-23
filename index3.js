var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var methodOverride=require('method-override');
//var _=require('lodash');
//var request=require('request');
//var cors=require('cors');
//var morgan=require('morgan');
//var restful=require('node-restful');
var mongoose=require('mongoose');
var url="http://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords="

//app.use(morgan('dev'));
//app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({limit:'10mb',extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
});

//mo

//var Model11=mongoose.model('Model',useSchema);
//mongoose.connect('mongodb://localhost:27017/my_database',{useMongoClient: true});
 //var Reoso=app.resource=restful.model('local',mongoose.model('prpro',useSchema))
 app.models=require('./models/scrape.js');
 var routes=require('./routes.js');
 
 //.methods(['get','post','put','delete']);
 //Reoso.register(app,'/meanpp');
 //Reoso.route('/:id.get',routes(app))
 
 //var Schema=mongoose.Schema;
 //app.get('/:id',function(req,res){
     routes(app);
            //console.log(savedata);
      		// _.each(routes,function(controller,route){
 	      //   app.use(route,controller(app,route));
        //     });
      		
       //      .save(function(err, result){
         	
     	 //    if(err)throw err;
     	 //    if(result){
     	 //    	console.log("ddddd");
     		// res.send(result)
     		
     // 	}
     // })
      	
      	//
     
       
 
console.log('Listening to port 2100...');
app.listen(2100);

// var options;
// var regex=/<li id=".*" data-asin="(.*)" class="s-result-item celwidget "><div class="s-item-container">/g
// var url="http://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords="

// var mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB,{useMongoClient: true});
// var db=mongoose.connection;
// 


// var user=mongoose.model('User',userSchema);
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// var reviews=require('./reviews.js');

// app.use('/reviews',reviews);
// app.get('/:id',function(req,res){
// 	var product=req.params.id;
//     z=url+product;
	


//});



