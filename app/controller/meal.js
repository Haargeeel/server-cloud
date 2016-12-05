const meal = require('../models/meal')

const _ = module.exports = {}

_.getMeals = (req, res, next) =>
  meal.getAllMeals().then(meals => {
    req.meals = meals
    console.log('meals', meals)
    next()
  })
  .catch(err => {
    next(err)
  })

_.addMeal = (req, res, next) => {
  meal.addMeal(req.body)
    .then(() => {
      res.json({ status: 'success' })
    })
}
