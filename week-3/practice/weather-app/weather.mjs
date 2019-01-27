import { get } from 'https';
import { STATUS_CODES } from 'http';
import api from './api.json';

function printWeather(weather) {
  const { name, main } = weather;
  const { temp } = main;
  const message = `Current temperature in ${name} is ${temp}ºC.`;
  console.log(message);
}

function printError(error) {
  console.error(error.message);
}

function getWeather(query) {
  try {
    const request = get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${api.key}&units=metric`, (response) => {
      if (response.statusCode === 200) {
        let body = '';

        response.on('data', (data) => {
          body += data.toString();
        });

        response.on('end', () => {
          try {
            const weather = JSON.parse(body);
            printWeather(weather);
          } catch (error) {
            printError(error);
          }
        });
      } else {
        const statusCodeError = new Error(`There was an error getting the message for ${query}. (${STATUS_CODES[response.statusCode]})`);
        printError(statusCodeError);
      }
    });
  } catch (error) {
    printError(error);
  }
}

export { getWeather };