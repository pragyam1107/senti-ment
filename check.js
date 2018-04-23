var webPage = require('webpage');
var page = webPage.create();
var fs=require('fs');
//var zz=setTimeout(
page.open('https://www.flipkart.com/story-home-104-tc-cotton-double-floral-bedsheet/product-reviews/itme56exc9zxnkeq?pid=BDSE56EXPKF3XF7C', function(status) {
  console.log('Status: ' + status);
  //setTimeout(function(){
  var content = page.content;
  page.render('github.png');
  fs.write("/home/prakhar/Desktop/projects/rev/3.html",content,"w");
  phantom.exit()
//},2000)
  // Do other things here...
})
//,2000);
