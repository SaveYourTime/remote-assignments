import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const { name } = req.cookies;
  if (name) {
    res.send(name);
  } else {
    res.redirect('/trackName');
  }
});

export default router;