import nltk
import ast
import codecs
import re
import json
import sys
from pprint import pprint
#nltk.download('stopwords')
#nltk.download('punkt')
#nltk.download('averaged_perceptron_tagger')

from nltk.tokenize import word_tokenize
from nltk.corpus import wordnet
from nltk.corpus import sentiwordnet
#from textblob import TextBlob
sent=[]

#reload(sys)
#sys.setdefaultencoding('utf8')
def tokenizeReviews(inp):
    cachedStopWords=nltk.corpus.stopwords.words("english")
    cachedStopWords.append('OMG')
    cachedStopWords.append(':-)')
    cachedStopWords.append(',')
    rsult=(' '.join([word for word in inp.split() if word not in cachedStopWords]))
    tokenizedReviews={}
    tokenizer=nltk.tokenize.punkt.PunktSentenceTokenizer()
    #cachedStopWords=nltk.corpus.stopwords.words("english")
    uniqueId=1
    for sentence in tokenizer.tokenize(inp):
        tokenizedReviews[uniqueId]=sentence
        uniqueId+=1
    out=str(tokenizedReviews)
    inputTupples=ast.literal_eval(out)
    outputPost={}
    for key,value in inputTupples.items():
        outputPost[key]=nltk.pos_tag(nltk.word_tokenize(value))
    prevWord=''
    prevTag=''
    currWord=''
    aspectList=[]
    outputDict={}
    for key,value in outputPost.items():
        for word,tag in value:
            if(tag=='NN' or tag=='NNP'):
                if(prevTag=='NN' or prevTag=='NNP'):
                    currWord=prevWord+' '+word
                else:
                    if(prevWord.upper()!='you' and prevWord.upper()!='I'and prevWord.upper()!='U' and prevWord.upper()!='let'):
                        aspectList.append(prevWord.upper())
                    currWord=word
            prevWord=currWord
            prevTag=tag
    for aspect in aspectList:
        if(aspectList.count(aspect)>1):
            if(outputDict.keys()!=aspect):
                outputDict[aspect]=aspectList.count(aspect)
    outputAspect=sorted(outputDict.items(), key=lambda x: x[1],reverse=True)
    outputAspectOpinionTuples={}
    orientationCache={}
    negativeWordSet={"don't","never","nothing","nowhere","noone","none","not","hasn't","hadn't","can't","couldn't","shouldn't","won't","wouldn't","don't","doesn't","didn't","isn't","aren't","ain't"}
    for aspect,no in outputAspect:
        aspectTokens=word_tokenize(aspect)
        count=0
        for key,value in outputPost.items():
            condition=True
            isNegativeSen=False
            for subWord in aspectTokens:
                if(subWord in str(value).upper()):
                    condition=condition and True
                else:
                    condition=condition and False
            if(condition):
                for negWord in negativeWordSet:
                    if(not isNegativeSen):
                        if negWord.upper() in str(value).upper():
                            isNegativeSen=isNegativeSen or True
                outputAspectOpinionTuples.setdefault(aspect,[0,0,0,0])
                for word,tag in value:
                    if(tag=='JJ' or tag=='JJR' or tag=='JJS' or tag=='RB' or tag=='RBR' or tag=='RBS'):
                        count+=1
                        if(word not in orientationCache):
                            orien=orientation(word)
                            orientationCache[word]=orien
                        else:
                            orien=orientationCache[word]
                        if(isNegativeSen and orien is not None):
                            orien=not orien
                        if(orien==True):
                            outputAspectOpinionTuples[aspect][0]+=1
                        elif(orien==False):
                            outputAspectOpinionTuples[aspect][1]+=1
                        elif(orien is None):
                            outputAspectOpinionTuples[aspect][2]+=1
        if(count>0):
            outputAspectOpinionTuples[aspect][0]=(outputAspectOpinionTuples[aspect][0])
            outputAspectOpinionTuples[aspect][1]=(outputAspectOpinionTuples[aspect][1])
            outputAspectOpinionTuples[aspect][2]=(outputAspectOpinionTuples[aspect][2])
            outputAspectOpinionTuples[aspect][3]=(outputAspectOpinionTuples[aspect][0]+outputAspectOpinionTuples[aspect][1]+outputAspectOpinionTuples[aspect][2])
            #print(aspect,':\t\tPositive => ', outputAspectOpinionTuples[aspect][0], '\tNegative => ',outputAspectOpinionTuples[aspect][1])

    print(json.dumps(outputAspectOpinionTuples))
    return;

def orientation(inputWord):
    wordSynset=wordnet.synsets(inputWord)
    #print(wordSynset)
    if(len(wordSynset) != 0):
        word=wordSynset[0].name()
        orientation=sentiwordnet.senti_synset(word)
        #print(orientation)
        if(orientation.pos_score()>orientation.neg_score()):
            return True
        elif(orientation.pos_score()<orientation.neg_score()):
            return False

with codecs.open ("data.txt","r",encoding='utf-8', errors='ignore') as myfile:
    d=(myfile.readlines())
for i in range(len(d)):

    data=tokenizeReviews(d[i])

    sent.append(data)
print(sent)
