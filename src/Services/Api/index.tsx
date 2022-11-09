import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v3/",
  
});
