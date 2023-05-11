const express = require("express")
const app = express()
app.set('view engine', "ejs")

const path = require('path')

app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, "public")))

app.get('/detalhes', (req,res)=> {
    const produtos = {
        produto1: "BICICLETA 29 OGGI AGILE PRO CARBON 2023",
        produto2: "BICICLETA 20 TSW RETRÔ ROSA",
        produto3: "BICICLETA 29 ABSOLUTE NERO 4 ELITE 2X9V C/ HIDRÁULICO GRAFITE/PRETO"
    }
    const produto = req.query.produtos
    res.render('detalhes', {produtos, produto})
})

app.get('/', (req, res) => {
    res.render('home')
})


app.listen(3000, () => {
    console.log("Servidor ligado na porta 3000!")
})