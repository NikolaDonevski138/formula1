import axios from "axios";

export default axios.create({
  baseURL: `http://ergast.com/api/f1/driverstandings/1.json?limit=15&offset=55`,
});
