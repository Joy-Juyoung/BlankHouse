import axios from '../api/axios';

const getAll = () => {
  return axios.get('/rooms');
};

const getRoomById = (id) => {
  return axios.get(`/rooms/${id}`);
};

const RoomsService = {
  getAll,
  getRoomById,
};

export default RoomsService;
