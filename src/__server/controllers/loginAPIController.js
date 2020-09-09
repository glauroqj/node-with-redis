export default async ( req, res ) => (
  new Promise(() => {
    console.log('< LOGIN API CONTROLLER > ', req.body)

    try {
      /** change req.session here */
      req.session.token = 'token value'
      req.session.userID = 456465
      req.session.userName = 'Maneiro'
      req.session.refreshToken = 'refresh token value'
      req.session.userEmail = req.body.email
      req.session.cookie.expires = 600000 /** 10 minutes */

      setTimeout(() => {
        res.status(200)
        console.log('< REQ SESSION RESPONSE > ', req.session)
        
        res.send({
          token: req.session.token,
          userID: req.session.userID,
          userName: req.session.userName,
          userEmail: req.session.userEmail,
          refreshToken: req.session.refreshToken
        })
        res.end()
      }, 5000)

    }
    catch(e) {
      res.status(400)
      res.send({
        error: 'error login',
        code: 123,
        status: 400
      })
      res.end()
    }

  })
)