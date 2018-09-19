const express = require('express');
const app = express();
const fs = require('fs');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
const controller = require('./controller/controller');

app.set('view engine', 'hbs'); // adalah view templating untuk html

hbs.registerPartials(`${__dirname}/views/partials`); //pemisah component html
hbs.registerHelper('halaman', () => {
  return 'ini halaman';
}); //helper dari hbs

app.use(express.static(`${__dirname}/public`)); //app.use adalah middleware
app.use((req, res, next) => {
  let meth = req.method;
  let url = req.url;
  log = new Date().toString() + meth + url + '\n';
  console.log(req.method, req.url, req.params);
  fs.appendFile('server.log', log, err => {
    console.log(err);
  });

  next();
});

app.use((req, res, next) => {
  // res.render('./../views/maintenance.hbs', {
  //   maintenance: `Oops! The ${req.url} url is Under maintenance`
  // });
  next();
});

app.get('/', controller.home);

app.get('/about/:id', controller.about);

app.get('/bad', controller.bad);

app.get('/portofolio', controller.portofolio);

//listen to the port server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
