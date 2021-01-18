const express = require("express");
const exhbs = require('express-handlebars');
const hbs = exhbs.create({});
const path = require('path');
// const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, 'public')));


sequelize
  .sync({
    force: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`App listening`));
  });