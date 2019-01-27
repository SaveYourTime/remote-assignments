import express from 'express';

const router = express.Router();

function sumOfNumbersToMax(max) {
  const min = 1;
  const sumOfNumbers = (min + max) * max / 2;
  return sumOfNumbers;
}

router.get('/', (req, res) => {
  let { number } = req.query;
  if (number) {
    number = parseInt(number);
    if (isNaN(number) || number <= 0) {
      res.send('Wrong Parameter');
    } else {
      const sumOfNumbers = sumOfNumbersToMax(number).toString();
      res.send(sumOfNumbers);
    }
  } else {
    res.send('Lack of Parameter');
  }
});

export default router;