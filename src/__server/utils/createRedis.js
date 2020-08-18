import redis from 'redis'
import session from 'express-session'

const createRedis = app => {
    const redisClient = redis.createClient()
    const redisStore = require('connect-redis')(session)
    
    redisClient.on('ready', msg => {
        console.log('< REDIS READY : OK > ' + (msg ? msg : ''))
    })

    redisClient.on('error', msg => {
        console.log('< REDIS ERROR : FAIL > ' + (msg ? msg : ''))
    })

    app.use(
        session({
            secret: 'redisSecretSession',
            name: '_uSession',
            rolling: false,
            resave: false,
            saveUninitialized: false,
            cookie: {
                secure: false, /** secure true in production env */
                expires: new Date(Date.now() + 600000),
                maxAge: 600000
            },
            store: new redisStore({
                client: redisClient,
                disableTouch: false,
                ttl: 60 * 10 /**10min */
            })
        })
    )

}

export default createRedis