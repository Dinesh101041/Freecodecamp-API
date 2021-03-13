from bs4 import BeautifulSoup as bs4
import requests

x= requests.get('https://www.freecodecamp.org/news/').text
soup=bs4(x,'lxml')
hack = soup.find_all('article',class_ = 'post-card')
print(len(hack))
dic=[]
for i in range(0,len(hack)):
    data={}
    data["company-name"] =[element.text for element in hack[i].find_all("div", "company-details ellipsis")]
    data["Event-link"] = hack[i].find('a',class_='challenge-card-wrapper').get('href','')
    dic.append(data)
print(dic)

