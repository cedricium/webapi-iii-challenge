const router = require('express').Router({ mergeParams: true })
const db = require('../../users/userDb')

router.get('/', async (req, res) => {
  try {
    const { id } = req.user
    const posts = await db.getUserPosts(id)
    res.status(200).json({
      posts
    })
  } catch (error) {
    res.status(500).json({
      error: `An error occurred while attempting to get the user's posts`
    })
  }
})

router.post('/', (req, res) => { })

module.exports = router
