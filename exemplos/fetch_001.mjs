import api from "../services/fetch_api.mjs";

const getCourse = (codigo) => {
  return api.get(`/courses/${codigo}`);
};

getCourse(25)
  .then((response) => response.json())
  .then((data) => console.log(data.name));
