import axios from "axios";

export const findByMuseId = async (museId : string) => {
    console.log("looking for company with id", museId)
    const response = await axios.get(
        `http://localhost:4000/api/companies/muse/${museId}`
    )
    return response.data
}

export const createCompany = async (company : any) => {
    console.log("in client, creating company: ", company)
    const response = await axios.post(
        `http://localhost:4000/api/companies`, company
    )
    console.log("response data from create company:", response.data)
    return response.data
}