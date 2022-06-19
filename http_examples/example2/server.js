import { createServer } from 'http'

const port = process.env.PORT || 3000

createServer((req, res) => {
    // console.log(req.url)
    // console.log(req.metod)

    if(req.url === '/') {
            res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
            res.write('<h1>Strona główna</h1>')
            res.end()
    }else if(req.url === '/users'){
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
        res.write('<h1>Strona użytkowników</h1>')
        res.end()
    }else {
        res.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'})
        res.end(`<h1>Brak zasobu</h1>`)
    }

    // res.end(`<h1>${req.url}</h1>`)
}).listen(port, '127.0.0.1', () => {
    console.log(`Server nasłuchuje na port: ${port}`)
})