import express from 'express';
import data from '../data/flashcardData.json';

const router = express.Router();
const { cards } = data.data;

router.get('/', (req, res) => {
  const numberOfCards = cards.length;
  const id = Math.floor(Math.random(0) * numberOfCards);

  res.redirect(`/card/${id}?side=question`);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  let { side } = req.query;
  if (side !== "question" && side !== "answer") {
    side = "question";
  }
  const text = cards[id][side];
  const { hint } = cards[id];
  const templateData = { text, id };

  if (side === "question") {
    templateData.hint = hint;
  }
  templateData.side = side === "question" ? "answer" : "question";

  res.render('card', templateData);
});

export default router;