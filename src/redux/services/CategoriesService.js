import axios from '../api/axios';

const getAllRoomCategories = () => {
  return axios.get('/categories/rooms');
};

const getAllExCategories = () => {
  return axios.get('/categories/experience');
};

const CategoriesService = {
  getAllRoomCategories,
  getAllExCategories,
};

export default CategoriesService;
