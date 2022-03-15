import axios from "axios";

export function deletemethods(id) {
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
}
