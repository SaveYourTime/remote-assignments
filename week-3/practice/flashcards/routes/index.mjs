import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const { username } = req.cookies;
  if (username) {
    res.render('index', { username });
  } else {
    res.redirect('/hello');
  }
});

router.get('/hello', (req, res) => {
  const { username } = req.cookies;
  if (username) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
});

router.post('/hello', (req, res) => {
  const { username } = req.body;
  res.cookie('username', username);
  res.redirect('/');
});

router.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

export default router;