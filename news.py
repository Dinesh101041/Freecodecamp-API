from bs4 import BeautifulSoup as bs4
import requests

x= requests.get('https://www.freecodecamp.org/news/').text
soup=bs4(x,'lxml')
hack = soup.find_all('article',class_ = 'post-card')
print(len(hack))
dic=[]
for i in range(0,len(hack)):
    data={}
    data["Tag"] = hack[i].find('span',class_='post-card-tags').text.strip(' \t\n\r')
    data["Blog-Title"] = hack[i].find('h2',class_='post-card-title').text.strip(' \t\n\r')
    data["Blog-link"] = hack[i].find('a',class_='post-card-image-link').get('href')
    data["Blog-link"]="https://www.freecodecamp.org"+data["Blog-link"]
    data["Author"] = hack[i].find('a',class_='meta-item').text.strip(' \t\n\r')
    data["Author-profile"] = hack[i].find('a',class_='meta-item').get('href')
    data["Author-profile"]="https://www.freecodecamp.org"+data["Author-profile"]
    dic.append(data)
print(dic)

