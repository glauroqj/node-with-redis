export default async ( req, res ) => {
  console.log('< LOGIN API CONTROLLER > ', req.body)

  /** call external api */

  /** change req.session here */
  req.session.token = 'token value'
  req.session.userID = 456465
  req.session.userName = 'Maneiro'
  req.session.refreshToken = 'refresh token value'
  req.session.cooke.expires = 600000 /** 10 minutes */

  res.status(200)
  res.send(`OK`)
  res.end()
}