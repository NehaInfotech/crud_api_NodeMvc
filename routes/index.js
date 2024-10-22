var express = require('express');
var router = express.Router();

let UC = require('../controllar/hcontroll')
const CC = require('../controllar/catagoryControllar')
const AM = require('../middleware/authcheack')

router.post('/createdata',AM.tokensecure, UC.createdata)
router.get('/showdata', AM.tokensecure,UC.showdata)
router.delete('/deletedata/:id',AM.tokensecure, UC.deletedata)
router.patch('/updatedata/:id',AM.tokensecure, UC.updatedata)
router.post('/login', UC.login)
router.post('/signup', UC.signup)

module.exports = router;