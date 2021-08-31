import axios from "axios";

const JOBS_API_URL = "http://localhost:8080/jobs";


class JobService {
    // getJobsByCategory(category) {
    //     return axios.get(`${JOBS_API_URL}?category=${category}`);
    // }

    // getJobsBySearchInput(searchInput) {
    //     return axios.get(`${JOBS_API_URL}?search=${searchInput}`)
    // }

    getAllJobs() {
        return axios.get(`${JOBS_API_URL}/all`)
    }

    getJobsByCompanyName(companyName) {
        return axios.get(`${JOBS_API_URL}?company_name=${companyName}`)
    }

    searchJobs(name, category) {
        return axios.get(`${JOBS_API_URL}/search?name=${name}&category=${category}`)
    }

    filterJobs(category, jobType, country, experienceLevel) {
        return axios.get(`${JOBS_API_URL}/filter?category=${category}&country=${"USA"}`)
    }

    getAllByCompanyId(id) {
        return axios.get(`${JOBS_API_URL}/filter-by-company/${id}`)
    }

}

export default new JobService();