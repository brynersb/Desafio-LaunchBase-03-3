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

    .get("/courses/:id", function (req, res) {

        const id = req.params.id;

        const curso = cursos.find(function (curso) {
            if (curso.id == id) {
                return true
            }
        })

        if (!curso) {
            return res.send("Video not Found!")
        }

        return res.render("course", { item: curso })
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