export default async ( req, res ) => {
    console.log('< LOGIN API CONTROLLER > ', req.body)

    /** call external api */

    /** change req.session here */

    req.session = {
        token: 'token value',
        userID: '123',
        userName: 'Maneiro',
        cookie: {
            expires: 600000 /** 10 minutes */
        }
    }

    res.status(200)
    res.send(`OK`)
    res.end()
}