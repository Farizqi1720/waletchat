const express = require("express")
const app = express()
const admin = require("../config/database")
const auth = require("../config/auth")
const db = admin.firestore()



module.exports ={
    formRegis(req,res){
        res.render("register",{
            url : 'http://localhost:8000/'
        });

    },
    
    saveRegis(req,res){
        const id = req.body.email
        const email = req.body.email
        const username = req.body.username
        const pass = req.body.pass
        
        app.post("/save", async () =>{
            try{
                console.log(req.body)
                if (email && username && pass) {
                    const response = await db.collection("akun").doc(id).set(userJson)
                    res.send(response)
                    if (error) throw error

                    req.flash('color', 'success');
                    req.flash('status', 'Yes..');
                    req.flash('message', 'Registrasi berhasil');

                    res.redirect("/login")
                }
                else {
                    res.redirect("/login")
                    res.end()
                }
            }
            catch(error){
                res.send(error)
            }
        })
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
         })

        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });
    }
}