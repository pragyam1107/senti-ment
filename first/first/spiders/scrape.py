import scrapy
import sys, json
from scrapy.http import Request
from scrapy.spidermiddlewares.httperror import HttpError
from scrapy.conf import settings
from scrapy.spider import BaseSpider
from scrapy.selector import HtmlXPathSelector
from scrapy.item import Item, Field
from scrapy.utils.serialize import ScrapyJSONEncoder
import pickle
class ReeSpider(scrapy.Spider):
                name="reviews"
                with open("data_am.txt","r") as myfile:
                    d=myfile.read().replace('\n','')
                with open("dat.txt","r") as myfile:
                    d1=myfile.read().replace('\n','')
                with open("dt.txt","r") as myfile:
                    d2=myfile.read().replace('\n','')
                with open("daa.txt","r") as myfile:
                    d3=myfile.read().replace('\n','')
                with open("dd.txt","r") as myfile:
                    d4=myfile.read().replace('\n','')
                with open("daa1.txt","r") as myfile:
                    d5=myfile.read().replace('\n','')
                with open("daa2.txt","r") as myfile:
                    d6=myfile.read().replace('\n','')
                with open("daa3.txt","r") as myfile:
                    d7=myfile.read().replace('\n','')
                with open("daa4.txt","r") as myfile:
                    d8=myfile.read().replace('\n','')
                with open("daa5.txt","r") as myfile:
                    d9=myfile.read().replace('\n','')

                #allowed_domains = ["amazon.com"]
                start_urls=['http://www.amazon.in/product-reviews/'+d+'/ref=cm_cr_dp_see_all_summary?ie=UTF8&reviewerType=all_reviews&showViewpoints=1&sortBy=helpful','http://www.amazon.in/product-reviews/'+d1+'/ref=cm_cr_dp_see_all_summary?ie=UTF8&reviewerType=all_reviews&showViewpoints=1&sortBy=helpful','http://www.amazon.in/product-reviews/'+d2+'/ref=cm_cr_dp_see_all_summary?ie=UTF8&reviewerType=all_reviews&showViewpoints=1&sortBy=helpful','http://www.amazon.in/product-reviews/'+d3+'/ref=cm_cr_dp_see_all_summary?ie=UTF8&reviewerType=all_reviews&showViewpoints=1&sortBy=helpful','http://www.amazon.in/product-reviews/'+d4+'/ref=cm_cr_dp_see_all_summary?ie=UTF8&reviewerType=all_reviews&showViewpoints=1&sortBy=helpful','http://www.amazon.in/product-reviews/'+d5+'/ref=cm_cr_dp_see_all_summary?ie=UTF8&reviewerType=all_reviews&showViewpoints=1&sortBy=helpful','http://www.amazon.in/product-reviews/'+d6+'/ref=cm_cr_dp_see_all_summary?ie=UTF8&reviewerType=all_reviews&showViewpoints=1&sortBy=helpful','http://www.amazon.in/product-reviews/'+d7+'/ref=cm_cr_dp_see_all_summary?ie=UTF8&reviewerType=all_reviews&showViewpoints=1&sortBy=helpful','http://www.amazon.in/product-reviews/'+d8+'/ref=cm_cr_dp_see_all_summary?ie=UTF8&reviewerType=all_reviews&showViewpoints=1&sortBy=helpful','http://www.amazon.in/product-reviews/'+d9+'/ref=cm_cr_dp_see_all_summary?ie=UTF8&reviewerType=all_reviews&showViewpoints=1&sortBy=helpful'
                 ]
                
                
                def parse(self, response):
                            #item=MyRee()
                            dd={}
                            dd1={}
                            dd2={}
                            dd3={}
                            dd4={}
                            x=response.url
                            y=(x.split("/"))[4]
                            ree="none"
                            img="none"
                            name="none"
                            price=response.xpath('//div[@class="a-row product-price-line"]/span[@class="a-size-base"]/span[@class="a-color-price arp-price"]//text()').extract_first()
                            ree=response.xpath('//div[@class="a-row review-data"]/span[@class="a-size-base review-text"]//text()').extract()
                            ree=' '.join(ree).strip()
                            img=response.xpath('//div[@class="a-text-center a-spacing-top-micro a-fixed-left-grid-col product-image a-col-left"]//img/@src').extract_first()
                            name=response.xpath('//div[@class="a-row product-title"]/h1[@class="a-size-large a-text-ellipsis"]/a[@class="a-link-normal"]//text()').extract_first()
                            dd2["name"]=name
                            dd1["img"]=img
                            dd["review"]=ree
                            dd4["price"]=price
                            dd3[y]=dd,dd1,dd2,dd4
                            print(json.dumps(dd3))
                            #request=scrapy.Request(self.self_urls,callback=self.parse_page2)


              

                            #item=ReeItem()
                            #item["name"]=(name)
                            #item["img"]=(img)
                            #item["ree"]=(ree)
                            #items.append(item) 
                            #dsd[key]=item
                            #ret=pickle.dumps(items)
                            #print(pickle.loads(ret))

