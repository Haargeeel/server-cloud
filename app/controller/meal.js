import meal from '../models/meal'

const me = module.exports = {}

me.getMeals = (req, res, next) =>
  meal.getAllMeals().then(meals => {
    req.meals = meals
    next()
  })
  .catch(err => {
    next(err)
  })

me.addMeal = (req, res, next) => {
  meal.addMeal(req.body)
    .then(() => {
      res.json({ status: 'success' })
    })
    .catch(err => {
      next(err)
    })
}

me.getRandomMeal = (req, res, next) =>
  meal.getRandomMeal().then(meal => {
    req.meal = meal
    next()
  })
  .catch(err => {
    next(err)
  })
