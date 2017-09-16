const express = require('express')
const app = express()

app.use('/', express.static('./'))

app.listen(3000, (error) => {
  if (error) {
    console.log(error)
  }
  console.log('listening on port!')
})
