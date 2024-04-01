import axios from 'axios'
const baseUrl = 'http://pweb-2085132486.ca-central-1.elb.amazonaws.com/api/projects'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  const ret = response.data.sort((a, b) => a.order - b.order)
  return ret
}

export default {getAll}