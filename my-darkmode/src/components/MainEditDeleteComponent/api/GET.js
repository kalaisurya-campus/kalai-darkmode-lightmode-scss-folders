import axios from "axios";

export function getKalaieditdata() {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`);
}

export function getKlaiaIdDataGet(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}
