import { Router } from 'express'

const routes = Router()

routes.get('/users', (request, response) => {
  const query = request.query
  console.log(query)
  response.json({ status: true })
})

routes.post('/users', (request, response) => {
  const body = request.body
  console.log(body)
  response.json({ status: true })
})

routes.put('/users/:id', (request, response) => {
  const params = request.params
  console.log(params)
  response.json({ status: true })
})

routes.delete('/users', (request, response) => {
  response.json({ status: true })
})

export default routes