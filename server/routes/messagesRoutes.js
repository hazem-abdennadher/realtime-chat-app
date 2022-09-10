const {
  getMessages,
  addMessage,
} = require('../controllers/messagesController');

const router = require('express').Router();

router.post('/add-message', addMessage);
router.post('/get-messages', getMessages);
module.exports = router;
