import http from 'http'

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
    // res.write('<h1>dupa maćka</h1>')
    res.write(`
    <div>
    <h1>Dzień dobry</h1>
    <script src='/.code.js'></script>
    `)
    res.end('kutas</div>')
}).listen(3500, '127.0.0.1')