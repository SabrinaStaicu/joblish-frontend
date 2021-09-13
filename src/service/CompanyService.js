import axios from "axios";
import AuthHeader from "./AuthHeader";

const COMPANIES_API_URL = "http://localhost:8080/companies";


class CompanyService {
    getAllCompanies() {
        return axios.get(`${COMPANIES_API_URL}/all`,{headers: AuthHeader()})
    }
}

export default new CompanyService();