import axios from "axios";
import AuthHeader from "./AuthHeader";

const JOBS_API_URL = "http://localhost:8080/jobs";


class JobService {
    getAllJobs() {
        return axios.get(`${JOBS_API_URL}/all`, {headers: AuthHeader()})
    }

    getJobsByCompanyName(companyName) { // #Todo delete maybe
        return axios.get(`${JOBS_API_URL}?company_name=${companyName}`, {headers: AuthHeader()})
    }

    searchJobs(name, category) {
        return axios.get(`${JOBS_API_URL}/search?name=${name}&category=${category}`, {headers: AuthHeader()})
    }

    filterJobs(category, location, jobTypeA,jobTypeB, experienceTypeC, experienceTypeD, experienceTypeE, experienceTypeF) {
        return axios.get(`${JOBS_API_URL}/filter?category=${category}&country=${location}&jobType=${jobTypeA}&jobType=${jobTypeB}&experienceType=${experienceTypeC}&experienceType=${experienceTypeD}&experienceType=${experienceTypeE}&experienceType=${experienceTypeF}`, {headers: AuthHeader()})
    }

    getAllByCompanyId(id) {
        return axios.get(`${JOBS_API_URL}/filter-by-company/${id}`, {headers: AuthHeader()})
    }
    addJobToFavorites(userId, jobId) {
        return axios.get(`${JOBS_API_URL}/add-favorites/${userId}/${jobId}`, {headers: AuthHeader()});
    }

    removeJobFromFavorites(userId, jobId) {
        return axios.get(`${JOBS_API_URL}/remove-favorites/${userId}/${jobId}`, {headers: AuthHeader()});
    }
    jobIsSaved(userId, jobId) {
        return axios.get(`${JOBS_API_URL}/favorites-contain-job/${userId}/${jobId}`, {headers: AuthHeader()});
    }

    getSavedJobs(userId) {
        return axios.get(`${JOBS_API_URL}/get-favorite-jobs/${userId}`, {headers: AuthHeader()})
    }
}

export default new JobService();