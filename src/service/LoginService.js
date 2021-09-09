import axios from "axios";

const USERS_API_URL = "http://localhost:8080/users";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET, OPTIONS, POST, PUT'

  }
  
class LoginService {

    
    
   
    addUser(data) {
        return axios.post(`${USERS_API_URL}/add`, {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
        });
    }

    loginUser(data) {
        return axios.post(`http://localhost:8080/login`, {
            email: data.email,
            password: data.password,
        },{
            headers: headers
          }).then(response => {
              localStorage.setItem("loggedin",JSON.stringify(response.data))
          });
    }

}

export default new LoginService();