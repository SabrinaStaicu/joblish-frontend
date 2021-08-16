import axios from "axios";

const JOBS_API_URL = "https://remotive.io/api/remote-jobs";
const API_KEY = "2a2e2571-8596-4969-8f0c-4e7ebd6dd4b6";


class JobService {
    getJobsByCategory(category) {
        return axios.get(`${JOBS_API_URL}?category=${category}`);
    }

    getJobsBySearchInput(searchInput) {
        return axios.get(`${JOBS_API_URL}?search=${searchInput}`)
    }
}

export default new JobService();