import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-f6650/us-central1/api", // The API (cloud function) URL
  headers: { "Access-Control-Allow-Origin": "http://localhost:3000/" },
});
export default instance;
