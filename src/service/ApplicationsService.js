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
            status: "Not_seen",
            notes: notes
        });
    }

    getAllByJobId(id) {
        return axios.get(`${APPLICATIONS_API_URL}/filter-by-job/${id}`)
    }

    userHasAlreadyApplied(userId, jobTitle, companyName) {
        return axios.get(`${APPLICATIONS_API_URL}/user-has-applied/${userId}/${jobTitle}/${companyName}`)
    }
}

export default new ApplicationsService()