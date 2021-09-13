import axios from "axios";

const USERS_API_URL = "http://localhost:8080/users";

class LoginService {
    addUser(data) {
        return axios.post(`${USERS_API_URL}/add`, {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
        });
    }

}

export default new LoginService();