import express from 'express';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const router = express.Router();

router.get('/', (req, res) => {
  const { query, cookies } = req;
  const nameFromQuery = query.name;
  const nameFromCookie = cookies.name;
  if (nameFromQuery) {
    res.cookie('name', nameFromQuery);
    res.send(200);
  } else if (nameFromCookie) {
    res.redirect('/myName');
  } else {
    res.sendFile(path.join(__dirname, '../public', 'register.html'));
  }
});

export default router;