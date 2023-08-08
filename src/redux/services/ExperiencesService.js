import axios from '../api/axios';

const getAll = () => {
  return axios.get('/experiences');
};

const getExperienceById = (id) => {
  return axios.get(`/experiences/${id}`);
};

const ExperiencesService = {
  getAll,
  getExperienceById,
};

export default ExperiencesService;
