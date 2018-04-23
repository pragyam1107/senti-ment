var page=require('webpage').create();
var fs=require('fs');
var zz=fs.read('name.txt')
var regex=/ data-asin="(.*)" class="s-result-item celwidget  "><div class="s-item-container">/g
var match;
var i=1;
page.open("https://www.amazon.in/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords="+zz, function(status){
	
	//console.log("Status: "+status);
	//if(status==="success"){
		var content=page.content;
		// while(i<11){
		// 	match=regex.exec(content)
		// 	console.log(match)
		// }
        //console.log(content)
		//var n=[]
		// for(j=0;j<10;j++){
		// 	n=(content.match(regex))
		// 	console.log(n)
		// }
		//fs.truncate("/home/pragya/Downloads/reviewpart3/push_fl/push_fl/spiders/red.html",0,function(){
		fs.write("/home/prakhar/Desktop/projects/rev/push_fl/push_fl/spiders/new_am.txt",content,"w")
		// 	function(err){
		// 	if(!err) console.log("done")
		// 		else console.log("gg")
		// //})
		// }})
		phantom.exit();
	//}

})