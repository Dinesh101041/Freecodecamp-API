import requests
from bs4 import BeautifulSoup as bs

def getnews(value):
    try:
        if(value=='all'):
            r=requests.get("https://slatekuchi.com/").text
        else:
            r=requests.get(f"https://slatekuchi.com/{value}").text
        soup=bs(r,'lxml')
        x=soup.find_all('div',class_="pt-cv-page")
        val={}
        val["data"]=[]
        for i in range(0,len(x)):
            dic={}
            dic["title"]=x[i].find('h4',class_="pt-cv-title").text
            dic["images"]=x[i].find('img', class_="pt-cv-thumbnail")['style'].split("url(")[1].split(")")[0].replace("'",'')
            dic["news-link"]=x[i].find('a',class_='pt-cv-href-thumbnail')['style'].split("url(")[1].split(")")[0].replace("'",'')
            val["data"].append(dic)
        
        val['category']=value
        val["count-articles"]=len(x)
        return val
    except Exception as e:
        return{"staus":False,"error":e}

		

                





    