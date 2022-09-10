const messageModel = require('../models/messageModel');
module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const newMessage = await messageModel.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });
    if (newMessage) return res.json({ message: 'Message Sent Successfully' });

    return res.json({ message: 'failed to add message to database' });
  } catch (err) {
    next(err);
  }
};
module.exports.getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    const messages = await messageModel
      .find({
        users: { $all: [from, to] },
      })
      .sort({ updatedAt: 1 });

    const messageFromWho = messages.map((msg) => {
      return {
        from: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    return res.json({ messages: messageFromWho });
  } catch (err) {
    next(err);
  }
};
