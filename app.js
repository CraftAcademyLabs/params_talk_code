const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response)=> {
  console.table(request.query)
  response.send(`<h1>Hello ${request.query.q}</h1>`)
})

app.get('/:name', (request, response)=> {
  console.table(request.params)
  console.table(request.query)
  response.send(`<h1>${request.params.name} is a ${request.query.role}</h1>`)
})

app.post('/', (request, response)=> {
  console.table(request.body)
  response.json({message: `${request.body.name} is a ${request.body.role}`})
})

app.listen(3232, () => console.log('The server is up and running....'))