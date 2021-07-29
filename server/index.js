const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 5000;
 const router = require('./router');
const {addUser, removeUser, getUser, getUsersInRoom }= require('./user')



const app = express();
const server = http.createServer(app);
const io=socketio(server);


io.on('connection',(socket)=>{
    console.log('New connection');
    socket.on('disconnect',()=>{
        console.log('I am left**');
    })
})


app.use(router);
server.listen(PORT,()=> console.log(`server is started ${PORT}`));