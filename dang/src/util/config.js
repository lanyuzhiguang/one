import axios from 'axios'

var instance = axios.create({
  // baseURL: '/api/',
  baseURL: 'http://17.yaojunrong.com/api/',
  timeout: 5000,
  headers:{'Content-Type':'application/json;charset=UTF-8'}



})

export default instance;
