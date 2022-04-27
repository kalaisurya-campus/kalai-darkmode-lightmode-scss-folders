import axios from "axios";

export function getDummeyApi() {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`);
}

export function EditDummeyApi(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}
