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
    io.use((socket, next) => {
        console.log('qqqq')
        console.log(socket.request.res)
    })

    io.on('connection', async (socket) => {
        try {
            console.log('sdfadf')
            // console.log(socket.request)
            // console.log(' ')
            // console.log(socket.request.res)
            console.log('asdfasdfs')
            console.log(socket.id)


            // const getSocket = await axios.get('http://localhost:3065/user/session');
            // console.log(getSocket)
        } catch (err) {
            console.log(err)
        }
    })
}

