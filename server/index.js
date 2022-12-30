require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messagesRoutes');
const socket = require('socket.io');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected To Database 🚀');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use('/api/auth', userRoutes);
app.use('/api/messages', messageRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});

const io = socket(server, {
  cors: {
    origin: '*',
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on('connection', (socket) => {
  global.chatSocket = socket;
  socket.on('add-user', (userId) => {
    onlineUsers.set(userId, socket.id);
    socket.broadcast.emit('user-connected', Array.from(onlineUsers.keys()));
  });
  socket.on('user-disconnect', (userId) => {
    onlineUsers.delete(userId);
    socket.broadcast.emit('user-connected', Array.from(onlineUsers.keys()));
  });
  socket.on('send-msg', (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('msg-recieve', data.message);
    }
  });
});
