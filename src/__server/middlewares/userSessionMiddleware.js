export default (req, res, next) => {
  console.log('< USER SESSION > ', req.session)

  next()
}