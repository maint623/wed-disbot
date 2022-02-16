//
const express = require('express')
const app = express()
var router = express.Router(); 
const port = 3000
const { Client, Intents, Collection } = require("discord.js"),
client = new Client( { intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES ] })
const path = require("path");
const bp = require('body-parser')
app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())
var sys = require("./file/system");
const fs = require("fs")
const multer = require('multer')
app.set('view engine', 'pug');
app.set('views', './file/views');

app.get("/message", function(req,res){
    res.sendFile(path.join(__dirname , "./file/views/main.html")); 
}); 

app.post("/post", async function(req,res){ 
    var result = await sys.send(req,res); 
    res.send(result); 
});

app.get("/embed", function(req,res){
    res.sendFile(path.join(__dirname , "./file/views/embed.html")); 
}); 

app.get("/png", function(req,res){
    res.render('png');
}); 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'./file/img')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) 
    }
  })

const upload = multer({storage: storage})
app.post('/png', upload.single('userfile'), (req, res, next) => {
    res.redirect('png');
    var result = sys.png(req,res); 
    res.send(result);
    
  })

app.get("/log", async function(req,res,response){
    res.sendFile(path.join(__dirname , "./file/views/log.html")); 
}); 


app.get("/log/:id", async function(req,res,response){ 
    const filePath = `./file/chatlog/chatlog - ${req.params.id}.txt`;
    console.log(filePath)
    fs.readFile(filePath, "utf-8", function(err, data){
        const messdata = data
        var template = `
        <h3>${messdata}</h3>
        `
        res.send(template)
    });
}); 

app.post("/embedpost", async function(req,res){
    var result = await sys.embed(req,res); 
    res.send(result); 
    console.log(`${req.body.d1}`)
});

app.all('*', function(req, res) {
    res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
});

fs.readFile("", "utf-8", function(err, data){

});

module.exports = router;

app.listen(port, () => {
    console.log(`port : ${port}`)
    })
