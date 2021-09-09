import axios from "axios";

const COMPANIES_API_URL = "http://localhost:8080/companies";


class CompanyService {
    getAllCompanies() {
        return axios.get(`${COMPANIES_API_URL}/all`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("loggedin"))?.token}`
            }
        })
    }
}

export default new CompanyService();