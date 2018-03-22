var socket = require("socket.io");

module.exports = function(server){
    var io = socket(server);
    io.on("connection", function(socket){
        socket.on("chat", function(data){ 
            io.sockets.emit("chat", data);
        });
        socket.on("typing", function(data){
            socket.broadcast.emit('typing', data);
        });
        console.log("Made socket connection id: " + socket.id);
    });
};