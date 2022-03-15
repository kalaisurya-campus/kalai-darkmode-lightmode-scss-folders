import axios from "axios";

export function PostData(formDatas) {
    return axios.post(`https://jsonplaceholder.typicode.com/posts`, formDatas);
}
