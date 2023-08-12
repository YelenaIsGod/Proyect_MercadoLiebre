const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3031;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})


app.listen(3031, () => console.log(`[server] runing on port ${PORT}`));