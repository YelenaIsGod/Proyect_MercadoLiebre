const express = require('express');
const {indexRouter, loginRouter, registerRouter} = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3031;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
    console.log(`[server] runing on port ${PORT}`)
});