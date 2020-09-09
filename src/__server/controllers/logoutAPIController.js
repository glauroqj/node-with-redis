export default async ( req, res ) => (
  new Promise(() => {
    console.log('< LOGOUT API CONTROLLER > ', req.body)

    try {
      res.clearCookie('_uSession', {path: '/', httpOnly: true, secure: false, maxAge: 0, expires: Date.now()})
      req.session.destroy()

      res.status(200)
      res.end()
    }
    catch(e) {
      res.status(400)
      res.send({
        error: 'error logout',
        code: 123,
        status: 400
      })
      res.end()
    }

  })
)