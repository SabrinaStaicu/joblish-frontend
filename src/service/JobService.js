import axios from "axios";

const JOBS_API_URL = "https://remotive.io/api/remote-jobs";


class JobService {
    getJobsByCategory(category) {
        return axios.get(`${JOBS_API_URL}?category=${category}`);
    }

    getJobsBySearchInput(searchInput) {
        return axios.get(`${JOBS_API_URL}?search=${searchInput}`)
    }

    getAllJobs() {
        return axios.get(`${JOBS_API_URL}?limit=50`)
    }

    getJobsByCompanyName(companyName) {
        return axios.get(`${JOBS_API_URL}?company_name=${companyName}`)
    }
}

export default new JobService();