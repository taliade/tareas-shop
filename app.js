const express = require('express')
const app = express()
const path = require('path')

const port = 3000  //.env 

app.get('/', (req, res) => res.send('Hello World! Como estas? '))


app.listen(port, () => console.log(`Comenzo a correr el Servidor http://localhost:${port}` ));  //alt + 96