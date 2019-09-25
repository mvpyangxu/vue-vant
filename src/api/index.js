import axios from 'axios'
// 导入进度条 及 样式表
import Nporgress from 'nprogress'
import 'nprogress/nprogress.css'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
axios.interceptors.request.use(res => {
  // 展示进度条
  Nporgress.start()
  res.headers.Authorization = window.sessionStorage.getItem('token');
  return res
})
axios.interceptors.response.use(res => {
  // 隐藏进度条
  Nporgress.done()
  return res 
})
// 获取图片地址api
export const pictureApi = params => {
    return axios.get('/api/getlunbo') 
}