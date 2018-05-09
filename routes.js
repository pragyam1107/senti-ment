'use strict';
module.exports=function(app){
  var cot=require('./controller/controller.js')

app.route('/')
 //.get(cot.list)
 .post(cot.require)
 };