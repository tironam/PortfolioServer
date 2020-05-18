const http = require('http')
const { readFile } = require('fs')
const { promisify } = require('util')

const rf = promisify(readFile)

const server = http.createServer((req, res) => {
    
    switch (req.url) {
        case '/':
            rf('index.html', 'utf8')
                .then(html => res.end(html))
                .catch(err => console.log(err))
            break
        case '/portfolio':
            rf('portfolio.html', 'utf8')
                .then(html => res.end(html))
                .catch(err => console.log(err))
            break
        case '/contact':
            rf('contact.html', 'utf8')
                .then(html => res.end(html))
                .catch(err => console.log(err))
            break
    }
})

server.listen(3000, () => {
    console.log('Server is ready!')
})