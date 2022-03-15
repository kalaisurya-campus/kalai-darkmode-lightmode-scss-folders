import axios from "axios";

export function getReducers() {
    return axios.get(`https://fakestoreapi.com/products`);
}
