import axios from "axios";

const COMPANIES_API_URL = "http://localhost:8080/companies";

class CompanyService {
    getAllCompanies() {
        return axios.get(`${COMPANIES_API_URL}/all`)
    }
}

export default new CompanyService();