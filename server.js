const http = require("http")
const APIS = require('./api.json')

const server = http.createServer((req,res)=> {
    if(req.url === '/api/analytics' && req.method ==='GET' ){
       var cal= APIS.filter(function(item){
            return item.id == "2";         
        });
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify(cal))
    }else{
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify({message:'Route not found'}))
    }

    if(req.url === '/api/analytics' && req.method ==='GET' ){
        var cal= APIS.filter(function(item){
             return item.id == "2";         
         });
         res.writeHead(200,{'content-type':'application/json'})
         res.end(JSON.stringify(cal))
     }else{
         res.writeHead(200,{'content-type':'application/json'})
         res.end(JSON.stringify({message:'Route not found'}))
     }





})

const PORT = process.env.PORT || 5000

server.listen(PORT,()=> console.log(`server running on port  ${PORT}`))