import {launchApp} from './app.js'
import request from 'superagent'

request.get('/cats') 
.then( res => {
  console.log(res)

})


document.addEventListener('DOMContentLoaded', launchApp)
