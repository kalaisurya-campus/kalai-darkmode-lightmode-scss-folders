import axios from "axios";

export function PutData(formDatas, id) {
    return axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        formDatas
    );
}
