var page=require('webpage').create();
var fs=require('fs');
var zz=fs.read('name.txt')

page.open("https://www.flipkart.com/search?q="+zz, function(status){
	//console.log("Status: "+status);
	//if(status==="success"){
		var content=page.content;
        //console.log(content)
		//var n=[]
		//for(j=0;j<10;j++){
	// 		n=(content.match(/<div class="col col-5-12 _2o7WAb" data-reactid="422"><div class="_6BWGkk" data-reactid="423"><div class="_1uv9Cb" data-reactid="424"><div class="_1vC4OE _2rQ-NK" data-reactid="425"><!-- react-text: 426 -->₹<!-- /react-text --><!-- react-text: 427 -->(.+?)<!-- /react-text --></div></div></div><div class="_3n6o0t" data-reactid="428">/));
	// //}
		//fs.truncate("/home/pragya/Downloads/reviewpart3/push_fl/push_fl/spiders/red.html",0,function(){
		fs.write("/home/prakhar/Desktop/projects/rev/push_fl/push_fl/spiders/red.txt",content,"w")
		// 	function(err){
		// 	if(!err) console.log("done")
		// 		else console.log("gg")
		// //})
		// }})
		phantom.exit();
	//}

})