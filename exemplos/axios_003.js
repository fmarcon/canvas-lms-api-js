/*
  Como funções assíncronas retornam objetos promisses, deve-se utiizar o await para
  pegar o resultado no console.log
*/

import api from "../services/axios_api.js";

const getCourse = (codigo) => api.get(`courses/${codigo}`);

const getNameCourse = async (codigo) => {
  const course = await getCourse(codigo);
  return course.data.name;
};

console.log(await getNameCourse(25));
