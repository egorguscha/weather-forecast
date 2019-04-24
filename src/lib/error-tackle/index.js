export const errorTackle = state => next => action => {
  try {
    return next(action)
  } catch (error) {
    console.log(error)
  }
}
