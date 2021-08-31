import axios from "axios";

const APPLICATIONS_API_URL = "http://localhost:8080/applications";

class ApplicationsService {
    getAllByUserId(id) {
        return axios.get(`${APPLICATIONS_API_URL}/by-user-id/${id}`)
    }

    cancelApplication(id) {
        return axios.delete(`${APPLICATIONS_API_URL}/delete/${id}`)
    }
}

export default new ApplicationsService()