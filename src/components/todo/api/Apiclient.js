import axios from "axios"

export const apiclient=axios.create({
    baseURL:'http://localhost:8080'
});
