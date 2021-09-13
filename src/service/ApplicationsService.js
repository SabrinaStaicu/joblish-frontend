import axios from "axios";
import AuthHeader from "./AuthHeader";

const APPLICATIONS_API_URL = "http://localhost:8080/applications";

class ApplicationsService {
    getAllByUserId(id) {
        return axios.get(`${APPLICATIONS_API_URL}/by-user-id/${id}`, {headers: AuthHeader()})
    }

    cancelApplication(id) {
        return axios.delete(`${APPLICATIONS_API_URL}/delete/${id}`, {headers: AuthHeader()})
    }

    addApplication(notes, userId, jobId) {
        return axios.post(`${APPLICATIONS_API_URL}/add/${userId}/${jobId}`, {
            status: "Not_seen",
            notes: notes
        }, {headers: AuthHeader()});
    }

    getAllByJobId(id) {
        return axios.get(`${APPLICATIONS_API_URL}/filter-by-job/${id}`, {headers: AuthHeader()})
    }

    userHasAlreadyApplied(userId, jobTitle, companyName) {
        return axios.get(`${APPLICATIONS_API_URL}/user-has-applied/${userId}/${jobTitle}/${companyName}`, {headers: AuthHeader()})
    }

    filterByStatus(userId, status) {
        return axios.get(`${APPLICATIONS_API_URL}/filter-by-status/${userId}/${status}`, {headers: AuthHeader()})
    }
}

export default new ApplicationsService()