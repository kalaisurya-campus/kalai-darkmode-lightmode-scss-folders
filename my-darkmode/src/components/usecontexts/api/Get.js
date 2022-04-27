import axios from "axios";

export function GetContextDataProviders() {
    return axios.get("http://jsonplaceholder.typicode.com/user");
}

export function GetPostsData() {
    return axios.get("http://jsonplaceholder.typicode.com/posts");
}
