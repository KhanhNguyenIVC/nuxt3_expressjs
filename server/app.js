const express = require('express');
const cors = require('cors');
const app = express();

const path = require('path');
const basename = path.basename(__filename);
const fs = require('fs');

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from port 5000')
})

// USING MIDDLEWARE
function middlewareServer(req, res, next) {
    console.log('middleware at server');
    next()
}

// IMPORT ROUTERS
app.use(middlewareServer)
fs
    .readdirSync(__dirname + '/routes')
    .filter(file => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js'
        );
    })
    .forEach(file => {
        console.log('router is imported: ', file);
        app.use(require(path.join(__dirname + '/routes', file)))
    });

app.listen(5000, () => {
    console.log('Listening on port 5000!')
});