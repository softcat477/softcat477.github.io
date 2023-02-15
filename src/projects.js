import axios from 'axios'
const baseUrl = 'https://personal-web-backend.fly.dev/api/projects'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  const ret = response.data.sort((a, b) => a.order - b.order)
  return ret
}

export default {getAll}