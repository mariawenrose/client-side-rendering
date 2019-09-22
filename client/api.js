import request from 'superagent'

export function loadUsers() {
  return request.get('/v1/users')
    .catch(e => {
      console.log('oops', e)
    })
}