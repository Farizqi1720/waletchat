//inisialisasi router dari express, controller regis, dan verifikasi sesi
const router  = require("express").Router();
const regisController = require("../controller/central").register;
const verifAkun =  require("../config/verif");

//redirect router 
router.get("/", verifAkun.isLogout, regisController.formRegis);
router.get("/save", verifAkun.isLogout, regisController.saveRegis);

module.exports = router;