/*
  Funções assíncronas sempre retornam um objeto Promisse, por isso na linha final
  usa-se o then
*/

import api from "../services/axios_api.mjs";

const getCourse = (codigo) => api.get(`courses/${codigo}`);

const getNameCourse = async (codigo) => {
  const course = await getCourse(codigo);
  return course.data.name;
};

getNameCourse(25).then((response) => console.log(response));
