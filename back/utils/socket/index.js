const socketIo = require('socket.io');
const axios = require('axios');

module.exports = (server, app, sessionMiddleware) => {
    const io = socketIo(server, { origin: '*:*' });

    // io.use((socket, next) => {
    //     try {
    //         sessionMiddleware(socket.request, socket.request.res, next);
    //     } catch (err) {
    //         console.log(err);
    //         next(err);
    //     }
    // });

    io.on('connection', async (socket) => {
        const getSocket = await axios.get('http://loaclhost:3065/socket');
        console.log(getSocket)
    })
}