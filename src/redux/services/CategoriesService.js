import axios from '../api/axios';

const getAllRoomCategories = () => {
  return axios.get('/categories/rooms');
};

const CategoriesService = {
  getAllRoomCategories,
};

export default CategoriesService;
