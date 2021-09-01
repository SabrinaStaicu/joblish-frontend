import axios from "axios";

const USERS_API_URL = "http://localhost:8080/users";

class UserService {
    getUserById(id) {
        return axios.get(`${USERS_API_URL}/${id}`)
    }
}

export default new UserService();