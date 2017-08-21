const Router = require('express').Router;
const { Post } = require('../models/post');

const route = new Router();

route.all('/submit', (req, res) => {
  console.log(req.method);

  if (req.method == 'POST') {
    const { user, title, link } = req.body;
    const post = new Post({ user, title, link });

    post.save((err) => {
      if (err) {
        res.render('submit.html', { req, err });
      } else {
        res.redirect('/');
      }
    });
  } else {
    res.render('submit.html', { req });
  }
});

route.get('/', (req, res) => {
  Post.find().sort('-_id').limit(10).exec((err, posts) => {
    res.render('index.html', { req, posts });
  });
});

route.post('/', (req, res) => {

  post.save((err) => {
    console.log(err);
    res.end();
  });
});

module.exports = route;
