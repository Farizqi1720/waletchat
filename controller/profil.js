
const express = require("express")
const app = express()
const admin = require("../config/database")
const db = admin.firestore()

module.exports ={
    profil(req,res){
        let id = req.session.email
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

    }
}