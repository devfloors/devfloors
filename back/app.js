const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const hpp = require('hpp');
const helmet = require('helmet');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const RedisStore = require('connect-redis')(session);
const redisClient = require('./utils/redis');

const routers = require('./routes');
const db = require('./models');
const mongoDB = require('./models/mongo');
const passportConfig = require('./utils/passport');
const errMsg = require('./utils/error/errorMessage');
const webSocket = require('./utils/socket');

dotenv.config()


const app = express();

const sessionMiddleware = session({
    store: new RedisStore({
        client: redisClient,
        // ttl: 3,
        logErrors: true
    }),
    saveUninitialized: false,
    resave: false,
    secret: process.env.PASSPORT_SECRET,
    cookie: {
        sameSite: 'lax'
    }
});
app.use('/favicon.ico', () => { });
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

passportConfig();

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
    app.use(hpp());
    app.use(helmet());
} else {
    app.use(morgan('dev'));
}

app.use(cookieParser(process.env.PASSPORT_SECRET));
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: true,
    credentials: true,
}));
mongoDB();

db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공 ')
    })
    .catch(console.error);

app.use('/', routers);
app.use(function (err, req, res, next) {
    console.log('err', err);
    res.status(500).send(errMsg.createErrMsg(err))
});

const http = require('http').createServer(app);

const server = http.listen(3065, () => {
    console.log('connected')
});

webSocket(server, app);