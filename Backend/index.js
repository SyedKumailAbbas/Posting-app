const express =require('express');
const db =require('./models')
const cors = require('cors')
const postRouter =require('./routes/Posts')
const app = express()

app.use(express.json());
app.use(cors())
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`your app is live on this server: ${PORT}`)
})

db.sequelize.sync().then((req) => {
    app.get("/", (req, res) => {
        console.log('hello profile');
        res.send("This is profile " + new Date())
    })
})


app.use("/post", postRouter)
