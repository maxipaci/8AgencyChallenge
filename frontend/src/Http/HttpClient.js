import axios from 'axios'
require('dotenv').config()

const baseUrl = process.env.REACT_APP_BASE_URL || 'http://127.0.0.1:5000/'

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
