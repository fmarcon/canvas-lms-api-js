/*
  Promisses de forma tradicional
*/

import api from '../services/axios_api.mjs'

const getCourse = (codigo) => {
  return api.get(`courses/${codigo}`);
};

const getNameCourse = (codigo) => {
  getCourse(codigo)
    .then((response) => {
      console.log(response.data.name);
    })
    .catch((error) => {
      console.log(error.response);
    })
    .finally(() => console.log("Sempre executa"));
};

getNameCourse(25);
