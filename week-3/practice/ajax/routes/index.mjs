import express from 'express';

const router = express.Router();

router.get('/getWelcomeMessage', (req, res) => {
  res.send(`
    <section>
      <h2>Welcome to the wonderful world of AJAX</h2>
      <p>This content provided to you dynamically by the XMLHTTP Request Object</p>
    </section>`);
});

export default router;