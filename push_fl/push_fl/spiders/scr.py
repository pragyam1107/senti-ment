import re
import requests
from bs4 import BeautifulSoup
import html2text
data=open("red.txt","r").read()
data1=open("new_am.txt","r").read()
soup=BeautifulSoup(data,"lxml")
soup_am=BeautifulSoup(data1,"lxml")
deal=[]
pr_am=[]
m=[]
rum=[]
n=[]
pid=[]
soup.prettify()
soup_am.prettify()
deal=soup.findAll("div",{"class": "_1vC4OE"})
pr_am=soup_am.find_all('a',{"class":"a-size-small a-link-normal a-text-normal"})
#print(pr_am)
#print(len(deal))
links=[]
dd=soup.findAll("div",{"class": "_3liAhj"})
for div in dd:
	links=div.findAll('a',{"class": "Zhf2z-"})
	for a in links:
                if(len(n)<11):
                        n.append(a['href'])
                else: break
for i in range(len(deal)):
        if(i<11):
                rum.append((deal[i]).getText())
        else:
                break
	#m[i]=n[i]
max=11
two=11
for div in pr_am:
        if(len(pid)<max):
                one=(div['href']).split('/')[5].split('#')[0]
                if(one!=two):
                        pid.append(one)
                else:
                        max+=1
                two=one
        else: break
        
del n[10:]
print(pid)
print(rum)
print(n)
