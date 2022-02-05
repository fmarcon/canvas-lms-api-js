import fetch from "node-fetch";
import { Headers } from "node-fetch";

import configuracao from "./configuracao.js";

const get = function (url) {
  return fetch(`${configuracao["urlBase"]}/${url}`, {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${configuracao["token"]}`,
    }),
  });
};

export default {get: get};
