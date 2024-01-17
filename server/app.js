const express = require('express');
const cors = require('cors');
const app = express();
const videoRouter = require('./routes/video');
const countryRouter = require('./routes/country');

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from port 5000')
})

function middlewareServer(req, res, next) {
    console.log('middle server');
    next()
}

// USING MIDDLEWARE
app.use(middlewareServer)

// USING ROUTER MODULES
app.use(videoRouter)
app.use(countryRouter)

app.listen(5000, () => {
    console.log('Listening on port 5000!')
});