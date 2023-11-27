const fs = require('fs').promises
const http = require('http')
console.log('start');
const server = http.createServer(async(req, res) => {
    let file = ''
    if(req.url === '/'){
        file = await fs.readFile('index.html', 'utf-8')
        res.end(file);
    }
    else if(req.url === '/about'){
        file = await fs.readFile('about.html', 'utf-8')
        res.end(file);
    }
    else if(req.url === '/contact-me'){
        file = await fs.readFile('contact-me.html', 'utf-8')
        res.end(file);
    }
    else{
        file = await fs.readFile('404.html', 'utf-8')
        res.end(file);
    }
})

server.listen(8080);
