import { RECEIVE_CITIES } from '../action-types'

export const receiveCities = (cities, isLoaded) => {
  const citiesList = cities.map((item, i) => {
    const {
      Key,
      EnglishName,
      Temperature: {
        Metric: { Value }
      }
    } = item
    return {
      rank: i + 1,
      id: Key,
      name: EnglishName,
      temperature: Value
    }
  })

  return {
    type: RECEIVE_CITIES,
    cities: citiesList,
    isLoaded
  }
}
