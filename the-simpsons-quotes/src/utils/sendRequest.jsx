import axios from "axios";

export const performRequest = ( url ) => {
  return axios.get(url)
    .then(response => {
      // console.log(response.data);
      return response.data
    })
    .catch(error => {
      console.error(error);
    });
};