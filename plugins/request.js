import axios from 'axios'

// 配置请求的基准URL地址
export const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})
export default ({store})=>{
    request.interceptors.request.use(function(config){
        console.log(store.state)
        console.log(store)
        const {user} = store.state
        console.log(config)
       if(user&&user.token){
        config.headers.Authorization = `Token ${user.token}`
       }
        
  
         return config;
       },function(error){
         return Promise.reject(error);
       })
}
const token = "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"
