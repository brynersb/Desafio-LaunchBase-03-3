const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

const cursos = require('./data.js')

server.set('view engine', 'njk')

server.use(express.static('public'))


nunjucks.configure("views", {
    express: server,
    noCache: true,
    autoescape: false

})

server
    .get("/", function (req, res) {

        return res.render("courses", { items: cursos })
    })

    .get("/about", function (req, res) {
        return res.render('about')
    })

server.use(function (req, res) {
    res.status(404).render("not-found");
});



server.listen(5000, function () {
    console.log("server is running!!!")
})