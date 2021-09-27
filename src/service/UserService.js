import axios from "axios";
import AuthHeader from "./AuthHeader";

const USERS_API_URL = "http://localhost:8080/users";

class UserService {
    getUserById(id) {
        return axios.get(`${USERS_API_URL}/${id}`, {headers: AuthHeader()})
    }

    updateUser(data, id) {
        return axios.put(`${USERS_API_URL}/update-user/${id}`, {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            city: data.city,
            experience: data.experience,
            phone: data.phone,
        }, {headers: AuthHeader()})
    }

    updateJobPreferences(id, jobPreference) {
        return axios.put(`${USERS_API_URL}/update-job-preferences/${id}`, jobPreference, {headers: AuthHeader()})
    }

    addNewSkill(id, skill) {
        return axios.get(`${USERS_API_URL}/add-new-skill/${id}/${skill}`, {headers: AuthHeader()});;
    }
}

export default new UserService();