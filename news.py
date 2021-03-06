from bs4 import BeautifulSoup as bs4
import requests

x= requests.get('https://www.hackerearth.com/challenges/').text
soup=bs4(x,'lxml')
# print(soup)
hack = soup.find_all('div',class_='challenge-card-modern')
print(len(hack))
dic=[]
for i in range(0,len(hack)):
    data={}
    data["company-name"] =[element.text for element in hack[i].find_all("div", "company-details ellipsis").split]
    data["Event-link"] = hack[i].find('a',class_='challenge-card-wrapper').get('href','')
    dic.append(data)
print(dic)

