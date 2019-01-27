import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mainRoutes from './routes/';
import cardRoutes from './routes/card';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

app.use(mainRoutes);
app.use('/card', cardRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found!');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000);
