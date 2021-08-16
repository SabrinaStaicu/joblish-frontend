import axios from "axios";

const JOBS_API_URL = "https://remotive.io/api/remote-jobs?category=software-dev";
const API_KEY = "2a2e2571-8596-4969-8f0c-4e7ebd6dd4b6";


class JobService {
    getJobs() {
        return axios.get(JOBS_API_URL);
    }
}

export default new JobService();