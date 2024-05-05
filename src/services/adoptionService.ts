import axios from "axios";
import { AdoptionForm } from "../models/AdoptionForm";

const apiURL = process.env.REACT_APP_API_URL + "adoptions" || "";

export const postAdoption = async (formValues: AdoptionForm) : Promise<any> => {
    const response = await axios.post(`${apiURL}`, formValues);
    return response.data;
}