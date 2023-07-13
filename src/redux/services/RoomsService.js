import axios from '../api/axios';

const getAll = () => {
  return axios.get('/rooms');
};

const getById = (id) => {
  return axios.get(`/rooms/${id}`);
};

const RoomsService = {
  getAll,
  getById,
};

export default RoomsService;
