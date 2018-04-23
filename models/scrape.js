var mongoose=require('mongoose');
//var SchemaObject=require('node-schema-object')
var userSchema=new mongoose.Schema({
	  name: {type: String,required: true},
	  prod_id: {type: String, required: true},
      fl_url: {type: String,required: true},
      price_fl: {type: String, required: true}
      });

//var uuu=('prprpr',userSchema);
 module.exports=mongoose.model('user',userSchema);

