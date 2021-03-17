from bs4 import BeautifulSoup as bs4
import requests

def getblog(value):
    try:
        #getting all the values
        if (value == 'all'):
            x = requests.get('https://www.freecodecamp.org/news/').text
        else:
            # getting the response based on particular tag
            x = requests.get(f"https://www.freecodecamp.org/news/tag/{value}").text
        soup=bs4(x,'lxml')
        hack = soup.find_all('article',class_ = 'post-card')
        #intitializing a dictionary
        val={}
        val["dic"]=[]
        for i in range(0,len(hack)):
            data={}
            data["Tag"] = hack[i].find('span',class_='post-card-tags').text.strip(' \t\n\r')
            data["Blog-Title"] = hack[i].find('h2',class_='post-card-title').text.strip(' \t\n\r')
            data["Blog-link"] = hack[i].find('a',class_='post-card-image-link').get('href')
            data["Blog-link"]="https://www.freecodecamp.org"+data["Blog-link"]
            data["Author"] = hack[i].find('a',class_='meta-item').text.strip(' \t\n\r')
            val["dic"].append(data)
        return val
    except Exception as e:
        return {"status":False,"error":e}

