import axios from "axios";

export function patchMethodData(id, data) {
    return axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
}
