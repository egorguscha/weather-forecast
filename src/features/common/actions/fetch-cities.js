import { request } from '../request'
import { computePages } from './cities-pagination'
import { receiveCities } from './receive-cities'
import { requestData } from './request-data'
import { REQUEST_CITIES } from '../action-types'

const ACCUWEATHER_API =
  'http://dataservice.accuweather.com/currentconditions/v1/topcities/150?apikey=naPFdtrvkmxrow59RA21sJmnezgsvMDP'

export const fetchCities = () => async dispatch => {
  try {
    dispatch(requestData(REQUEST_CITIES, false))

    const cities = await request(`${ACCUWEATHER_API}`)

    dispatch(receiveCities(cities, true))
    dispatch(computePages())
  } catch (error) {
    console.log(error)
  }
}
