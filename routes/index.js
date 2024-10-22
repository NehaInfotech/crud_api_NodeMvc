var express = require('express');
var router = express.Router();

let UC = require('../controllar/hcontroll')
const CC = require('../controllar/catagoryControllar')
const AM = require('../middleware/authcheack')

router.post('/Create',AM.tokensecure, UC.Create)
router.get('/show', AM.tokensecure,UC.show)
router.delete('/Delete/:id',AM.tokensecure, UC.Delete)
router.patch('/updete/:id',AM.tokensecure, UC.updete)
router.post('/login', CC.login)
router.post('/signup', CC.signup)

module.exports = router;