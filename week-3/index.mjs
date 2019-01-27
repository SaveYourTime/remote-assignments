import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import calculateRoutes from './routes/calculate';
import userRoutes from './routes/user';
import registerRoutes from './routes/register';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('public'));

app.use('/getData', calculateRoutes);
app.use('/myName', userRoutes);
app.use('/trackName', registerRoutes);

app.listen(3000);