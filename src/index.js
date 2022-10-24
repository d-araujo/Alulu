const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.set('view engine', 'ejs')

app.get('/',(req,res) => {
    res.render('index.ejs')
})

app.post('/', (req,res) => {
    res.send("OK")
    console.log(req.body,req.file)
})

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})