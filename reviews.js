var express=require('express');
var router=express.Router();
var url="http://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords="
var rp=require('request-promise');
var cheerio=require('cheerio');
var regex=/<li id=".*" data-asin="(.*)" class="s-result-item celwidget "><div class="s-item-container">/g
var http=require('http');
var pro=[];
router.get('/:id',function(req,res){
     var product=req.params.id
     z=url+product;
     http.get(z,function(res){
     var data='';
     res.on('data',function(chunk){
     	data+=chunk.toString();
     })
     .on('end',function(){
      while((match=regex.exec(data))){
      	//console.log(match[1]);
        pro.push(match[1]);
        
     //    var product=new user({
     //      prod_id: match[1]
     //    });
     //    product.save(function(err,user){
     //    	if(err)
     //    		res.render('show_message', {message:"Database error",type: "error"});
     //        else
     //        	res.render('show_message', {
     //        		message: "New User Added", type: "success", user: product
     //        	});
     //    })
      }
      console.log(pro);
      
     //  user.update(
     //  	{$push: {name: product}},
     //     {$push: {prod_id: pro}}
     //    );
     });
});

     //rp(z)
      // .then(function(htmlString){
      // 	const $=cheerio.load(htmlString)
      // 	$('#"result_0" ."s-result-item celwidget " li').each(function(){
      //     console.log($(this).attr('data-asin'));
      // 	});
      	
      	//console.log($('.s-result-item celwidget').attr('id'));
  //       lists=$('div."a-row s-result-list-parent-container"');
		// $(lists).each(function(i,list){
		// 	li=$('ul."s-result-list s-col-1 s-col-ws-1 s-result-list-hgrid s-height-equalized s-list-view s-text-condensed"')
		// 	var prod_id=$(li).attr('id');
		//     console.log(prod_id);
		// })
        //res.send(htmlString)
      // })
      // .catch(function(error){
      //  console.log("err")
      // });
     //($(link).text()+':\n '+$(link).attr('data-asin'))
});


module.exports=router;