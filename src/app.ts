
import express from 'express'

const urlEncoderRoutes = require("./routes/urlEncoderRoutes")
const app = express();

require("dotenv").config();


app.use(express.urlencoded())
app.use(express.json())

app.use('/' , urlEncoderRoutes)

app.listen(3333, () => console.log('server running on port http://localhost:3333'))