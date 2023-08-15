const express = require('express');
const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

const app = express();
const PORT = process.env.PORT || 3031;

app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
    console.log(`[server] runing on port ${PORT}`)
});