import { getWeather } from './weather';

const query = process.argv.slice(2).join(',');

getWeather(query);