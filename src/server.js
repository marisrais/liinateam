const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

app.get(/.*/, function (req, res){
    res.sendFile(path.join(_dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log('Listening on port:' + $(port))

