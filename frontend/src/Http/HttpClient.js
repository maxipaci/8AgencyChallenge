import axios from 'axios'

const baseUrl = 'http://localhost:5000/'

export async function SendRequest(method, relativeUrl, data) {
  const headers = {}
  const url = baseUrl + relativeUrl
  const response = await axios({
    method, url, headers, data,
  })
    .catch((error) => {
      throw error.message
    })

  return response
}
