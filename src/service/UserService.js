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

    updateJobPreferences(id, lookingForJob) {
        //de pus data
        console.log(lookingForJob)
        return axios.put(`${USERS_API_URL}/update-job-preferences/${id}`, {
            openToWork : lookingForJob,
        }, {headers: AuthHeader()})
    }
}

export default new UserService();