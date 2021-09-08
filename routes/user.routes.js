const {Router } = require('express');
const UsersController = require('../controllers/user.controller');

const router = Router();
const usersController = new UsersController();

router.get('/', usersController.usersGet);
router.post('/', usersController.usersPost);
router.put('/:id', usersController.usersPut);
router.patch('/', usersController.usersPatch);
router.delete('/', usersController.usersDelete);

module.exports = router;