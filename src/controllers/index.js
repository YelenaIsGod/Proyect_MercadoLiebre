const fs = require('fs')
const path = require('path')

const getData = () => {
    const rawDatos = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf-8');

    return JSON.parse(rawDatos);
}

const indexController = (req, res) => {
    const products = getData();
    res.render('index', {
        products,
    });
}

const loginController = (req, res) => {
    res.render('login');
}

const registerController = (req, res) => {
    res.render('register');
}

module.exports = {
    indexController,
    loginController,
    registerController
}