from bs4 import BeautifulSoup as bs4
import requests

x= requests.get('https://inshorts.com/en/read').text
soup=bs4(x,'lxml')
hack = soup.find_all('div',class_='news-card z-depth-1')
print(len(hack))
dic=[]
for i in range(0,len(hack)):
    data={}
    data['title'] = hack[i].find('span',itemprop="headline").text
    dic.append(data)
print(dic)

