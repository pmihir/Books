import axios from "axios";
import { API } from "../constants/constant";

export const getBookData = async () => {
  let data = await axios.get(`${API}/books`);
  let response = await data.data;
  return response;
}

export const getBookByCat = async (cat) => {
  let data = await axios.get(`${API}/books/?topic=${cat}&mime_type=image`);
  let response = await data.data;
  return response;
}

export const getBookBySearch = async (searchText) => {
  let data = await axios.get(`${API}/books/?search=${searchText}`);
  let response = data.data;
  return response;
}