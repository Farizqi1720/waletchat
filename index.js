const express = require("express")
const app = express()

const admin = require("firebase-admin")
const credentials = require("./key.json")

admin.initializeApp({
    credential : admin.credential.cert(credentials)
})

const db = admin.firestore()


app.get('/login', async (req,res) => {
    try{
        const akuns = db.collection("akun")
        const hasil = await akuns.get()
        let hasilArr = []
        hasil.forEach(doc => {
            hasilArr.push(doc.data())
        })
        res.send(hasilArr)
    }
    catch(error){
        res.send(error)
    }
})


//const admin = require("./config/database").admin
//const admin = require("./config/database").akuns



//app.set("view engine", "ejs")

//post
app.post("/create", async (req,res) =>{
    try{
        console.log(req.body)
        const id = req.body.email
        const userJson = {
            email : req.body.email,
            username : req.body.username,
            pass : req.body.pass,
            foto : req.body.foto
        }
        const response = await admin.collection("akun").doc(id).set(userJson)
        res.send(response)
    }
    catch(error){
        res.send(error)
    }
})

//get
app.get('/login', async (req,res) => {
    try{
        const akuns = admin.collection("akun")
        const hasil = await akuns.get()
        let hasilArr = []
        hasil.forEach(doc => {
            hasilArr.push(doc.data())
        })
        res.send(hasilArr)
    }
    catch(error){
        res.send(error)
    }
})

//profile
app.get('/profil/:id', async (req,res) => {
    try{
        const akuns = admin.collection("akun").doc(req.params.id)
        const profil = await akuns.get()
        res.send(profil.data())
    }
    catch(error){
    res.send(error)
    }
})

//atur port
const PORT = 8000;
app.listen(PORT, ()=>{
    console.log('Server work on. . .')
})
/*//inisialisasi library
const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('req-flash');
const app = express();

//inisialisasi routes
const rLog = require("./routes/route-login");
const rReg = require("./routes/route-register");
const rApp = require("./routes/route-app");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//atur session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'walch4t',
    cookie: {
        sameSite: true
    }
}));
app.use(flash());

//menentukan direktori engine ejs
app.set("views",path.join(__dirname,"./views"));
app.set("view engine", "ejs");

//redirect route
app.use("/login", rLog);
app.use("/register", rReg);
app.use("/", rApp);

//atur port
const PORT = 8000;
app.listen(PORT, ()=>{
    console.log('Server work on. . .')
})*/