import axios from 'axios';

export default axios.create({
  baseURL: 'https://blankhouse.onrender.com/api/v1',
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

// https://blankhouse.onrender.com/api/v1/rooms
