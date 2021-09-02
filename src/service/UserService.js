import axios from "axios";

const USERS_API_URL = "http://localhost:8080/users";

class UserService {
    getUserById(id) {
        return axios.get(`${USERS_API_URL}/${id}`)
    }

    updateUser(data, id) {
        return axios.put(`${USERS_API_URL}/update-user/${id}`, {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            city: data.city,
            experience: data.experience,
            phone: data.phone
        })
    }
}

export default new UserService();