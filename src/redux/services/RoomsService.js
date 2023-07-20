import axios from '../api/axios';

const getAll = () => {
  return axios.get('/rooms');
};

const getRoomById = (id) => {
  return axios.get(`/rooms/${id}`);
};

// const getAllRoomCategories = () => {
//   return axios.get('/categories/rooms');
// };

const RoomsService = {
  getAll,
  getRoomById,
  // getAllRoomCategories,
};

export default RoomsService;
