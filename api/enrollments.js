import api from "../services/axios_api.js";

const listEnrollments = async (course_id) => {
  const response = await api.get(`courses/${course_id}/enrollments`);
  return response.data;
};

const getUsers = (course_id) => {
  return listEnrollments(course_id);
};

export default getUsers;
