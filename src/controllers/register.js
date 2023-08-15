const path = require('path');

const register = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'))
}

module.exports = register;