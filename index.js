const http = require('http');
const host = 'localhost'
const port = 8000
const requestlistener = function (req, res) {
    res. writrHead(200)
    res. end("My first serv!")
}
const srever = http.createServer(requestlistener)
Server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`)
})


