const express = require('express')

const app = express()

app.get('/',(req,res) => {
  res.send('Hello from app engine')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}...`)
})