## FreeCodeCamp - Blog API
This is unofficial FreeCodeCamp blog Api to fetch the limited blogs posted on FreeCodeCamp using BeautifulSoup

## Steps to Run

- Clone the Repository
- And Run the `pip3 install requirements.txt` to install required packages
- And Run `Python3 app.py` it will start server in port `5000`
- Go the the port and search for any keyword. 

Example

```
http://127.0.0.1:5000/react
```

It will fetch the blog based on `React` tag

Example Response 

```
{
   "blog_data":[
      {
         "Author":"Kunal Nalawade",
         "Blog-Title":"How to Write Unit Tests in React",
         "Blog-link":"https://www.freecodecamp.org/news/how-to-write-unit-tests-in-react/",
         "Tag":"#React"
      },
      {
         "Author":"Beau Carnes",
         "Blog-Title":"ChatGPT React Course – Code Your Own ChatGPT Clone",
         "Blog-link":"https://www.freecodecamp.org/news/chatgpt-react-course/",
         "Tag":"#React"
      }
   ]
}
```
    
