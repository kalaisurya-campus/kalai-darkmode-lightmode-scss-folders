import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getKlaiaIdDataGet } from "../api/GET";

function Views(props) {
    const usehistory = useHistory();
    console.log(usehistory);
    const { id } = useParams();
    const [userdatas, SetUsersData] = useState({
        title: "",
        body: "",
        userId: "",
    });
    useEffect(() => {
        getViewUserDatas();
    });
    const getViewUserDatas = () => {
        getKlaiaIdDataGet(id)
            .then((res) => {
                console.log(res.data);
                SetUsersData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <button onClick={() => usehistory.goBack()}>Back</button>
            <div>
                <p>Id:{id}</p>
                <p>Tilte:{userdatas.title}</p>
                <p>Body:{userdatas.body}</p>
                <p>UserId:{userdatas.userId}</p>
            </div>
        </div>
    );
}

export default Views;
