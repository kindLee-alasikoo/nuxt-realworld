import axios from 'axios'

// 配置请求的基准URL地址
axios.defaults.baseURL = 'https://conduit.productionready.io/'
const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})

  
export default request