'use strict';
module.exports=function(app){
  var cot=require('./controller/controller.js')

app.route('/:id')
 //.get(cot.list)
 .post(cot.create)
 .get(cot.require);
 };