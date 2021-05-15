//  Call for API
// use random user API
import axios from "axios";
const url = 'https://randomuser.me/api/?results=30';
//api call
const APIexport = {
    getEmployeeList: function () {
      return axios.get(url);
    },
  };
  export default APIexport;