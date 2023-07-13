import axios from '../api/axios';

const getAll = () => {
  return axios.get('/rooms');
};

const RoomsService = {
  getAll,
};

export default RoomsService;
