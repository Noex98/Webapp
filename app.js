const express = require ('express');
const router = express.Router();
const path = require('path');

// Config
const app = express();
const PORT = process.env.PORT || 4000;

// Parse forms and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

// Cors headers
/*app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});*/

// Static frontend
app.use('/', express.static(path.join(__dirname, 'frontend')));

// Index.html
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html')
})

// Listen for requests
app.listen(PORT, () => console.info('App kører på port: ' + PORT ));