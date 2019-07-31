const router = require('express').Router()
const db = require('../../users/userDb')
const { validateUserId, validateUser } = require('../../middleware')

router.get('/', (req, res) => {

})

router.get('/:id', validateUserId, (req, res) => {
  const { user } = req
  res.status(200).json(user)
})

router.post('/', validateUser, async (req, res) => {
  try {
    const { name } = req.body
    const user = await db.insert({ name })
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to create a new user`
    })
  }
})

router.delete('/:id', (req, res) => {

})

router.put('/:id', (req, res) => {

})

module.exports = router
