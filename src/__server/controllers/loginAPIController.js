export default async ( req, res ) => (
  new Promise(resolve => {
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
        resolve(req.session)
        res.end()
      }, 5000)

    }
    catch(e) {
      res.status(400)
      resolve(false)
    }

  })
)