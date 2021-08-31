import axios from "axios";

const APPLICATIONS_API_URL = "http://localhost:8080/applications";

class ApplicationsService {
    getAllByUserId(id) {
        return axios.get(`${APPLICATIONS_API_URL}/by-user-id/${id}`)
    }

    cancelApplication(id) {
        return axios.delete(`${APPLICATIONS_API_URL}/delete/${id}`)
    }

    addApplication(notes, userId, jobId) {
        return axios.post(`${APPLICATIONS_API_URL}/add/${userId}/${jobId}`, {
            status: "Pending",
            notes: notes
        });
    }
}

export default new ApplicationsService()