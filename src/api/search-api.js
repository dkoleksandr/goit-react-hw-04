import axios from "axios";
import 'dotenv/config'
// require("dotenv").config();

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getSearchApi = async (searchQuery, page) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      client_id: process.env.Access_Key,
      per_page: 9,
      page,
    },
  });
  return data.results;
};
