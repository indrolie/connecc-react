import axios from 'axios';

const request = axios.create({
  baseURL: 'https://connecc-api.herokuapp.com/users',
  timeout: 5000
});

export default request;
