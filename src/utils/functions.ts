import axios from 'axios'
export const getParamValues = (url: string) => {
  return url
    .slice(1)
    .split('&')
    .reduce((prev: any, curr: any) => {
      const [title, value] = curr.split('=')
      prev[title] = value
      return prev
    }, {})
}

//getParamValues function that will store the access_token, token_type and expires_in values in an object

export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem('params') || '{}')
    if (params) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${params.access_token}`
    }
  } catch (error) {
    console.log('Error setting auth', error)
  }
}

export const get = async (url: string) => {
  setAuthHeader()
  const result = await axios.get(url)
  return result.data
}
