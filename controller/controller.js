const home = (req, res) => {
  res.render('./../views/home.hbs', {
    header: 'This is First Page',
    pageTitle: 'Home Page',
    description: 'this is your landing page',
    year: new Date()
  });
};

const bad = (req, res) => {
  res.render('./../views/bad', {
    header: 'Kedua',
    pageTitle: 'Bad Page',
    description: 'this is bad endpoint',
    year: 2000
  });
};

const about = (req, res) => {
  console.log(req.params.id);
  res.render(`./../views/about.hbs`, {
    header: 'Ketiga',
    pageTitle: `About Page with id params ${req.params.id}`,
    description: 'this is about endpoint',
    year: 2016
  });
};

const portofolio = (req, res) => {
  res.render('./../views/portofolio', {
    header: 'Ke empat',
    pageTitle: 'Portofolio Page',
    description: 'this isi portofolio page',
    year: 2001
  });
};

module.exports = { bad, about, home, portofolio };
