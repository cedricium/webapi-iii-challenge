const router = require('express').Router()
const db = require('../../users/userDb')
const { validateUserId, validateUser } = require('../../middleware')

router.get('/', async (req, res) => {
  try {
    const users = await db.get()
    res.status(200).json({
      users
    })
  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to get users`
    })
  }
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

router.delete('/:id', validateUserId, async (req, res) => {
  try {
    const { id } = req.user
    await db.remove(id)
    res.status(204).end()
  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to delete user`
    })
  }
})

router.put('/:id', (req, res) => {

})

module.exports = router
