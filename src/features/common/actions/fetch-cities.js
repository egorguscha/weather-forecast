import { request } from '../request'
import { computePages } from './cities-pagination'
import { receiveCities } from './receive-cities'
import { requestCities } from './request-cities'

const ACCUWEATHER_API =
  'http://dataservice.accuweather.com/currentconditions/v1/topcities/150?apikey=naPFdtrvkmxrow59RA21sJmnezgsvMDP'

export const fetchCities = () => async dispatch => {
  try {
    dispatch(requestCities(false))

    const cities = await request(`${ACCUWEATHER_API}`)

    dispatch(receiveCities(cities, true))
    dispatch(computePages())
  } catch (error) {
    console.log(error)
  }
}
