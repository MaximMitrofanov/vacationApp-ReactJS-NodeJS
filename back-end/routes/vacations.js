const express = require('express');
const router = express.Router();
const handler = require('../handlers/vacations')
const auth = require('../auth/jwtAuth')

/* GET users listing. */
router.get('/', handler.allVacations);
router.get('/:id', handler.byID);

/* POST users listing */
// router.post('/', usersController.registerUser)

/*DELETE users listing*/
// router.delete('/logout', usersController.logOut)

module.exports = router;
