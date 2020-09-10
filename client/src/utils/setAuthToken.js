import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    console.log('Hello2');
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    console.log('Hello3');
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
