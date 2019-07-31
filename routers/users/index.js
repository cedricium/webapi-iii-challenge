const router = require('express').Router()
const { validateUserId } = require('../../middleware')

router.get('/', (req, res) => {

})

router.get('/:id', validateUserId, (req, res) => {
  const { user } = req
  res.status(200).json(user)
})

router.post('/', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

router.put('/:id', (req, res) => {

})

module.exports = router
