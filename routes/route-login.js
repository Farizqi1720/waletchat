//inisialisasi router dari express, controller login, dan verifikasi sesi
const router = require('express').Router();
const loginController = require('../controller/central').login;
const verifAkun = require('../config/verif');

//redirect router
router.get("/", verifAkun.isLogout, loginController.login);
router.get("/logout", loginController.logout);
router.post("/auth", loginController.logAuth);

module.exports = router;