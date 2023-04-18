const auth = require('../config/auth')
const admin = require("../config/database")
const db = admin.firestore()


module.exports = {
    login(req,res){
        //masuk ke login views
        res.render("login", { 
            url : 'http://localhost:8000/',
            colorFlash : req.flash('color'),
            statusFlash : req.flash('status'),
            messageFlash : req.flash('message')
        })
    },
    logAuth(req,res){
         const userJson = {
            email : req.body.email,
            pass : req.body.pass
        }
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        req.session.loggedin = true;
        req.session.userid = userJson.email;
        req.session.username = userJson.username;
        res.redirect('/');
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
         })
    },
    logout(req,res){
        req.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
            res.clearCookie('walch4t');
            res.redirect('/login');
        });
    },

}