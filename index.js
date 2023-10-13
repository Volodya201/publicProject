const express = require("express")
const app = express()

app.use('/public', express.static('public'))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html")
})


app.listen(80, () => {
    console.log("Server's working")
})