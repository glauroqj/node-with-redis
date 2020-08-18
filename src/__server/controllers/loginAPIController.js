export default async ( req, res ) => {
    console.log('< LOGIN API CONTROLLER > ', req.body)

    res.status(200)
    res.send(`OK`)
    res.end()
}