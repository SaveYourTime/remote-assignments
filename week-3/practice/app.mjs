import { getProfile } from './profile';
const users = ['chalkers', 'alenaholligan'];
//const users = process.argv.slice(2);

users.forEach((user) => {
  getProfile(user);
});
