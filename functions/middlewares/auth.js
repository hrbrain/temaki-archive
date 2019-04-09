const auth = require('basic-auth')

const users = {
  hrb: { password: 'seriesofsushi' }
}

const authMiddleware = (req, res, next) => {
  const user = auth(req)

  if (!user || !users[user.name] || users[user.name].password !== user.pass) {
    res.set('WWW-Authenticate', 'Basic realm="Authorize required"')
    return res.status(401).send()
  }
  return next()
}

module.exports = authMiddleware