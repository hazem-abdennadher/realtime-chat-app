const {
  register,
  login,
  setAvatar,
  allUsers,
} = require('../controllers/userController');

const router = require('express').Router();

router.post('/register', register);
router.post('/login', login);
router.post('/set-avatar/:id', setAvatar);
router.get('/all-users/:id', allUsers);
module.exports = router;
