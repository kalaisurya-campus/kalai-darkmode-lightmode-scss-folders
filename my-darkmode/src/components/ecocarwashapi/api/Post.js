import axios from "axios";

export function PostDataSEtAccess(data) {
    return axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
}
