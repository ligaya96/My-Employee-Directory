//  Call for API
// use random user API
import axios from "axios";
const url = 'https://randomuser.me/api/?results=50&nat=fr&seed=foobar&exc=login,registered';
//api call
const APIexport = {
    getEmployeeList: function () {
      return axios.get(url);
    },
  };
  export default APIexport;