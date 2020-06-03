import axios from "axios";

export default year =>
  axios.create({
    baseURL: `http://ergast.com/api/f1/${year}/results/1.json`,
  });
