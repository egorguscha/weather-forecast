export const request = (url, options = {}) => {
  if (typeof url === 'object') {
    return Promise.all(
      url.map(item => {
        return fetch(item, options).then(response => {
          if (!response.ok) throw new Error('Town not found')
          return response.json()
        })
      })
    )
  }
  return fetch(url, options).then(response => {
    if (!response.ok) throw new Error('Town not found')
    return response.json()
  })
}
