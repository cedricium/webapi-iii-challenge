const logger = (req, res, next) => {
  const timestamp = new Date().toTimeString()
  const { method, url } = req
  console.log(`${method} ${url} -- ${timestamp}`)
  next()
}

const validateUserId = (req, res, next) => {
  /**
   * TODO
   */
}

const validateUser = (req, res, next) => {
  /**
   * TODO
   */
}

const validatePost = (req, res, next) => {
  /**
   * TODO
   */
}

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
}
