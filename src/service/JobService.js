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

    filterJobs(category, location, jobTypeA,jobTypeB, experienceTypeC, experienceTypeD, experienceTypeE, experienceTypeF) {
        console.log(jobTypeA)
        return axios.get(`${JOBS_API_URL}/filter?category=${category}&country=${location}&jobType=${jobTypeA}&jobType=${jobTypeB}&experienceType=${experienceTypeC}&experienceType=${experienceTypeD}&experienceType=${experienceTypeE}&experienceType=${experienceTypeF}`)
    }

    getAllByCompanyId(id) {
        return axios.get(`${JOBS_API_URL}/filter-by-company/${id}`)
    }

    addJobToFavorites(userId, jobId) {
        return axios.get(`${JOBS_API_URL}/add-favorites/${userId}/${jobId}`);
    }

    removeJobFromFavorites(userId, jobId) {
        return axios.get(`${JOBS_API_URL}/remove-favorites/${userId}/${jobId}`);
    }
    jobIsSaved(userId, jobId) {
        return axios.get(`${JOBS_API_URL}/favorites-contain-job/${userId}/${jobId}`);
    }

    getSavedJobs(userId) {
        return axios.get(`${JOBS_API_URL}/get-favorite-jobs/${userId}`)
    }


}

export default new JobService();