# Freecodecamp-Blog API
This  unofficial freecodecamp blog Api to fetch the blogs posted on Freecodecamp

# Usage
For All category blogs make request as <br>
 ```bash
   https://api-freecodecamp.herokuapp.com/all
  ```
  <br>
  
For particular `Tag` add `name` in place of `all` like below <br>
```bash
   https://api-freecodecamp.herokuapp.com/react
  ```

# Response Format
The Response will be in the format JSON like below

```json
{
    "dic": [
        {
            "Author": "Yogesh Chavan",
            "Blog-Title": "How to Build an Accordion Menu in React from Scratch – No External Libraries Required",
            "Blog-link": "https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/",
            "Tag": "#React"
        },
        
        {
            "Author": "Reed Barger",
            "Blog-Title": "How to Create a React App with a Node Backend: The Complete Guide",
            "Blog-link": "https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/",
            "Tag": "#React"
        },
        {
            "Author": "Akash Joshi",
            "Blog-Title": "A Better Way to Structure React Projects",
            "Blog-link": "https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/",
            "Tag": "#React"
        }
    ]
}


```

# Contribution 
  Any issue or pull request are welcome :grinning:
  
  if you like this or it helps you show some :heart: and :star: 
  
