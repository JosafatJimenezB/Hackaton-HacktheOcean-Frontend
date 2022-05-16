import axios from "axios";
export default axios.create({
  baseURL: "https://inspiring-horse-d14449.netlify.app/.netlify/functions/api",
  headers: {
    "Content-type": "application/json",
  }
});
