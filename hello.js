var page=require('webpage').create();
//var system=require('system').args;
var fs=require('fs');
var system=require('system');
var z=system.args[1]
//var z='https://www.flipkart.com/moto-e4-plus-iron-gray-32-gb/p/itmevqynuz4fwxca'
page.open(z,function(status){
	console.log("Status: "+status);
	if(status==="success"){
		//page.render('exa.png')
		//var red='2.html'
		
		return page.content
	}
	phantom.exit();
})
