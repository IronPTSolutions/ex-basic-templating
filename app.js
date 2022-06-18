const express = require('express');


// Creamos la aplicación servidor ejecutando express como una función
const app = express();

app.use(express.static(`${__dirname}/public`));

// Router Midleware
app.get('/', (req, res, next) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/about', (req, res, next) => {
  res.send('About')
})

app.get('/team', (req, res, next) => {
  res.sendFile(`${__dirname}/views/team.html`)
})


const port = 3000;
app.listen(port, () => console.log(`Application listening at port ${port}`));
