from bs4 import BeautifulSoup as bs4
import requests

x= requests.get('https://devpost.com/hackathons').text
soup=bs4(x,'lxml')
print(soup)
hack = soup.find_all('div',class_='hackathon-tile')
print(len(hack))
dic=[]
for i in range(0,len(hack)):
    data={}
    dic["title"] = hack[i].find('h3',class_='mb-4').text
    dic.append(data)
print(dic)

