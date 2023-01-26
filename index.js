import { allUsers, initData} from './data'
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/init-app', (req, res) => {
    res.send(initData)
  })

app.get('/search-data', (req, res) => {
    res.send(allUsers)
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})