//inisialisasi router dari express, controller login, dan verifikasi sesi
const router = require('express').Router();
const homeController = require("../controller/central").home;
const profilController = require('../controller/central').profil;
const verifAkun = require('../config/verif');

//redirect 
router.get('/', verifAkun.isLogin, homeController.home);
router.get('/profil', verifAkun.isLogin, profilController.profil);

module.exports = router;