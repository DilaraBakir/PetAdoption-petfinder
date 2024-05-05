import axios from "axios";
import { Pet } from "../models/Pet";

const apiURL = process.env.REACT_APP_API_URL + "pets" || "";

export const getPets = async (searchTerm?:string) : Promise<Pet[]> => {
    let response;
    if(searchTerm){
        response = await axios.get(`${apiURL}?q=${searchTerm}`);
    }
    else{
        response = await axios.get(apiURL);
    }

    return response.data as Pet[];
}

export const getPetById =async (id:number) : Promise<Pet> => {
    const response = await axios.get(`${apiURL}/${id}`);

    return response.data as Pet;
}