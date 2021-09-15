import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api";
const API_KEY = "22641563-e3a9716a3c097249b8be22daf";

export const fetchImages = (name, page) => {
  return axios
    .get(
      `?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
    )
    .then(({ data }) => {
      return console.log(data.hits);
    })
    .catch((error) => console.log(error));
};
