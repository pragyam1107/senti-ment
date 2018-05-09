import nltk
from textblob import TextBlob
import sys
import json
sent=[]
with open ("data.txt","r") as myfile:
   d=myfile.readlines()
#lines=d.split(',')
for i in range(10): 
  test=TextBlob(d[i])
  z=test.sentiment.polarity
  #print(cl.classify(test))
  #z.accuracy(test)
  sent.append(z)
print(sent)
 
    

 
