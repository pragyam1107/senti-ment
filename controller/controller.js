'use strict';
var mongoose=require('mongoose');
var url="http://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&amp;field-keywords="
var cheerio=require('cheerio');
var request=require('request');
//var regex=/https://www.amazon.in/(.*)/dp/(.*)#customerReviews/g
//<li id="result_11" data-asin="B073T5JD2R" class="s-result-item celwidget  "><div class="s-item-container">
//var regex2=/<>/g
//var regex2=/<div class="_1vC4OE" .*>.*₹(.*)<div class="_3auQ3N" .*>/g
var http=require('http');
var json=require('json');
var spawn=require('child_process').spawn;
var currencyFormatter=require('currency-formatter')
var await=require('await')
var union= require('arr-union');
const co=require('co');
const phantom=require("phantom");
var Crawler=require('phantom-crawler');
const driver=require('node-phantom-promise');
const phantomjs=require('phantomjs');
const wait=require('co-wait');
var rp=require('request-promise');
var async=require('async');
var forEach=require('async-foreach').forEach;
var each=require('async-each-series');
var cmd=require('node-cmd');
var match;
var fs=require('fs');
var sortBy=require('sort-by');
var groupArray=require('group-array');
var i=1;
var crawler=new Crawler();
var path=require('path');
//var sys=require('sys');
var PythonShell = require('python-shell');
var myPythonScriptPath="first/first/spiders/scrape.py";
var arraySort=require('array-sort')
var bodyParser=require('body-parser');
var sdds=require('../models/scrape.js');
mongoose.connect('mongodb://localhost:27017/my_db');
var userSchema=mongoose.model('user');
mongoose.Promise=global.Promise;

//app.use(bodyParser.json());
    //require('./models/scrape.js');
    //=mongoose.model('prpro',useSchema);
    exports.create=function(req,response){

  }
      
   //  }


    function create(req,response){
      var prod_id=[];
      var name=req.body.id;
      console.log('d');
      var flip=[];
      fs.truncate("push_fl/push_fl/spiders/name.txt",0,function(){
          fs.writeFile("push_fl/push_fl/spiders/name.txt",name,function(err){
            if(err){
              console.log(err);
            }
          })
      })
      var z=url+name

            
      //var z=url+name;
      //http.get(z, function(res){
     // var request=this;  
    // var dasa='';
     console.log("res")
     // res.on('data',function(chunk){
     //  //console.log(chunk)
     //   dasa+=chunk.toString();
     //  // 
     //  // if(dasa.length>5000){
     //  //   request.abort();
     //  // }
      
    // })
      //.on('end',function(){

     // console.log(dasa)
      //while((match=regex.exec(dasa)) && i<12){
        //console.log(prod_id)
      //  i=i+1;
        // if(match[1]==[]){
        //   regex=
        // }
        
      //  prod_id.push(match);
        //console.log(prod_id)
        // if(i==12){

         // console.log("hhh")
        //  console.log(JSON.stringify(prod_id));
          //console.log(name);
          //routes(app);

          //var vv=JSON.stringify(prod_id)
           fs.truncate("push_fl/push_fl/spiders/red.txt",0,function(err){
            if(err) console.log(err)
           })
           fs.truncate("push_fl/push_fl/spiders/new_am.txt",0,function(err){
            if(err) console.log(err)
           })
          //cmd.run('> /home/pragya/Downloads/reviewpart3/push_fl/push_fl/spiders/red.html');
          //--------
          cmd.get(`
            cd 'push_fl/push_fl/spiders'
            phantomjs hello.js
            phantomjs new.js
            python2.7 scr.py
           `,function(err,flip1){
          if(!err){
            cmd.run('cd ../../../')
            var vv=(flip1.split('\n'))[0]
            var price=(flip1.split('\n'))[1]
            flip=(flip1.split('\n'))[2]
            console.log(flip)
            var user=new userSchema({
            name: name,
            prod_id: vv,
            fl_url: flip,
            price_fl: price
            })
           console.log(user);
           user.save(function(err,result){
           if (err){
           console.log(err);
           }
           else{
          console.log("ddccd");
          getResult(req,response, result)
           }

      });
      }
     //else{
      //console.log(err)
     // }  else{
     //  console.log(err)
     // }  
          })
     // }
      // -------------
  //  };
   // }
// });

  // }).on("err",function(e){
  //   console.log("e.message");
    }

    function getResult(req,res,result){

      
      var name=req.body.id;
      var items=[];
      var fl_urls=[];
      var price_fl=[];

            items=(result.prod_id).split(",");
            items[0]=(items[0]).replace("[","")
            items[9]=(items[9]).replace("]","")
            price_fl=(result.price_fl).split(',');
            price_fl[0]=(price_fl[0]).replace("[","")
            price_fl[9]=(price_fl[9]).replace("]","")
            //price_fl=(price_fl).split(',');
            fl_urls=((result.fl_url).split(','));
            var name_fl=[];
            var id_fl=[];
            price_fl[0]=price_fl[0].substring(8)
              price_fl[0]=price_fl[0].replace(/\'/,"")
              price_fl[0]=currencyFormatter.format(price_fl[0],{code: 'INR'})
            for(var pri=1; pri<10; pri++){

              price_fl[pri]=price_fl[pri].substring(9)
              price_fl[pri]=price_fl[pri].replace(/\'/,"")
              price_fl[pri]=currencyFormatter.format(price_fl[pri],{code: 'INR'})
            }
            console.log(price_fl)
            //var pid_fl=[];
            for(var flip2=0;flip2<10;flip2++){
              items[flip2]=items[flip2].split("'")[1]
              //items[flip2]=items[flip2].replace(/'/,"")
              var str_fl=(fl_urls[flip2])
              var list_fl=str_fl.split('/')
              name_fl[flip2]=list_fl[1]
              list_fl=(list_fl[3]).split('&')
              id_fl[flip2]=list_fl[0]
              }
            
            var url_fl=[]
            var flipkart_link=[]
            //var price_fl1=[]
            //var price_fl
             for(var flip3=0;flip3<10;flip3++){
               url_fl[flip3]='https://www.flipkart.com/'+name_fl[flip3]+'/product-reviews/'+id_fl[flip3]
              flipkart_link[flip3]='https://www.flipkart.com/'+name_fl[flip3]+'/p/'+id_fl[flip3]
              
              }
            
             var rev_fl=[];
             var img_fl=[];
             var i_fl=0;
             
              
            // console.log(name_fl)
            // console.log(id_fl)
             //
            //items=JSON.parse(items[0]);
            console.log(items[0])
            
              fs.truncate("first/first/spiders/data_am.txt",0,function(){
              console.log("items");
                fs.writeFile("first/first/spiders/data_am.txt",items[0],function(err){
                if (err)
                  console.log(err);
                
                })  })
              fs.truncate("first/first/spiders/dat.txt",0,function(){
              //setTimeout(function(){
                fs.writeFile("first/first/spiders/dat.txt",items[1],function(err){
                if (err){
                  console.log(err);
                }else{
            
              console.log("itr");
                
              }
            })  })
              fs.truncate("first/first/spiders/dt.txt",0,function(){
              //setTimeout(function(){
                fs.writeFile("first/first/spiders/dt.txt",items[2],function(err){
                if (err){
            console.log(err);
                }else{
            
              //console.log(itr);
                
              }
            })  })
              fs.truncate("first/first/spiders/daa.txt",0,function(){
              //setTimeout(function(){
                fs.writeFile("first/first/spiders/daa.txt",items[3],function(err){
                if (err){
                  console.log(err);
                }else{
            
              //console.log(itr);
                
              }
            })  })
              
              fs.truncate("first/first/spiders/dd.txt",0,function(){
              //setTimeout(function(){
                fs.writeFile("first/first/spiders/dd.txt",items[4],function(err){
                if (err){
                  console.log(err);
                }else{
            
              //console.log(itr);
                
              }
            })  })
              fs.truncate("first/first/spiders/daa1.txt",0,function(){
              //setTimeout(function(){
                fs.writeFile("first/first/spiders/daa1.txt",items[5],function(err){
                if (err){
                  console.log(err);
                }else{
            
              //console.log(itr);
                
              }
            })  })
              fs.truncate("first/first/spiders/daa2.txt",0,function(){
              //setTimeout(function(){
                fs.writeFile("first/first/spiders/daa2.txt",items[6],function(err){
                if (err){
                  console.log(err);
                }else{
            
              //console.log(itr);
                
              }
            })  })
            fs.truncate("first/first/spiders/daa3.txt",0,function(){
              //setTimeout(function(){
                fs.writeFile("first/first/spiders/daa3.txt",items[7],function(err){
                if (err){
                  console.log(err);
                }else{
            
              //console.log(itr);
                
              }
            })  })
            fs.truncate("first/first/spiders/daa4.txt",0,function(){
              //setTimeout(function(){
                fs.writeFile("first/first/spiders/daa4.txt",items[8],function(err){
                if (err){
                  console.log(err);
                }else{
            
              //console.log(itr);
                
              }
            })  })
            fs.truncate("first/first/spiders/daa5.txt",0,function(){
              //setTimeout(function(){
                fs.writeFile("first/first/spiders/daa5.txt",items[9],function(err){
                if (err){
                  console.log(err);
                }else{
            
              //console.log(itr);
                
              }
            })  })
         console.log("Ds")
         
                      cmd.get(`
                        cd 'first/first/spiders'
                        scrapy crawl reviews
                        `,function(err,data3){
                          if(!err){
                            cmd.run('cd ../../../')
                            var dat3=[]
                            dat3=data3.split('\n')
                            var items=[]
                            var links=[]
                            var names=[]
                            var images=[]
                            var reviews=[]
                            var prices=[]
                            // setTimeout(function(){
                            //   console.log("boo")
                            // },10000)
                            console.log(dat3.length)
                            for(var o=0;o<10;o++){
                              //console.log(dat3[o])
                              try{
                              var ama=JSON.parse(dat3[o])
                              items[o]=Object.keys(ama)
                              links[o]="http://www.amazon.in/dp/"+items[o]
                              prices[o]=ama[items[o]][3]['price']
                              reviews[o]=ama[items[o]][0]['review']
                              images[o]=ama[items[o]][1]['img']
                              names[o]=ama[items[o]][2]['name']
                              }catch(e){
                              links[o]="http://www.amazon.in/dp/"+"nope"
                              prices[o]="no"
                              reviews[o]="no"
                              images[o]="no"
                              names[o]="no"
                              }
                            }
                            var price_fl1=[]
                          var om={}
                          forEach(url_fl,function(item, index){
                            //console.log(url_fl)
                            phantom.create().then(function(ph){
                            ph.createPage().then(function(page){
                            page.open(item).then(function(status){
                              setTimeout(here,1000)
                              })
                            function here(){
                            page.property('content').then(function(content){
                            //var st=setTimeout(function(){

                            let $=(cheerio.load(content));

                            $('div[class="_2sxWXr"]').find('img[class="hoZMHD"]').each(function(index, element){
                            img_fl[i_fl]=($(element).attr("src"))
                            })
                            //console.log(img_fl)
                            var rev_fl1;
                            price_fl1[i_fl]=price_fl[i_fl]
                            $('div[class="row"]').find('div[class="qwjRop"]').each(function(index, element){
                            rev_fl1=($(element).text());
                           });
                           page.close();
                           ph.exit();
                    
                           rev_fl[i_fl]=(rev_fl1+"\n")
                           i_fl++;
                         //  console.log(rev_fl)
                           callback(rev_fl,img_fl,i_fl,price_fl1);
                     
                          //},3000)
                      
                          })
                        }
                          })
                          })

               
                          });
                          
                            function callback(rev_fl,img_fl,i_fl,price_fl1){

                            console.log("all done");
                            if(i_fl==10){
                              
                                // for(var count=0;count<10;count++){
                                //   var price_fl1[count]=price_fl[count]
                                // }
                                // if(count==9){
                                  console.log("price_fl1")
                                //}
                              //console.log(price_fl1)
                              for(var r_fl=0;r_fl<10;r_fl++){
                                links[10+r_fl]=flipkart_link[r_fl]
                                names[10+r_fl]=name_fl[r_fl]
                                images[10+r_fl]=img_fl[r_fl]
                                prices[10+r_fl]=price_fl1[r_fl]
                              }
                              
                              var lat_data=reviews[0]
                              for(var latest=1;latest<10;latest++){
                               lat_data=lat_data+"\n"+reviews[latest]
                              }
                              data3=lat_data+rev_fl
                              //console.log()
                              fs.truncate("data.txt",0,function(){
                              fs.writeFile("data.txt",data3,function(err){
                                if(err){
                                  console.log(err)
                                }
                                console.log("done")
                              })
                            })
                              //console.log(names)
                            var key='after analysis';
                            om[key]=[];
                            PythonShell.run('python.py',function(err,results){
                              if(err){
                                console.log(err)
                              }
                              else{
                                for(var i=0;i<(20);i++){
                                  try{
                                    var se=JSON.parse(results[i])
                                  var keys=Object.keys(se)
                                  for(var j=0;j<keys.length;j++){
                                    var sentrev={
                                      review: se[keys[j]],
                                      aspect: keys[j],
                                      name: names[i],
                                      image: images[i],
                                      link: links[i],
                                      price: prices[i]
                                    }
                                    om[key].push(sentrev);
                                  }
                                  } catch(e){
                                    var fg="failed"
                                    var sentrev={
                                      review: fg,
                                      aspect: fg,
                                      name: names[i],
                                      image: images[i],
                                      link: links[i],
                                     price: prices[i]
                                    }
                                    om[key].push(sentrev);
                                  }
                               }
                                var c=groupArray(om['after analysis'],'aspect')
                                var array=Object.keys(c)
                                var numsort=function(a,b){
                                  return c[b].length - c[a].length;
                                }
                                var view=[]
                                var result=[]
                                result=array.sort(numsort)
                                for(var m=0;m<array.length;m++){
                                  view.push(c[result[m]])
                                }
                                res.send(JSON.stringify(view))
                              }
                            })
                             }
                            }
                            
                          }
                        })
    }


     exports.require=function(req,res){



console.log(req.body)


         var que=userSchema.findOne({
         	'name': req.body.id
         }, function(err,rslt){
         	if(err) console.log(err); 
            //items=result.prod_id;

            console.log(rslt)

            if(!rslt)
            {
              create(req,res);
            }
            else
            {
              getResult(req,res,rslt);
            }
            
        }
        )}