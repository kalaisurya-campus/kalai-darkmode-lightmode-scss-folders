import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getKlaiaIdDataGet } from "../api/GET";
import { PostData } from "../api/Post";
import { PutData } from "../api/put";

function Edit(props) {
    const usehistory = useHistory();
    const { id } = useParams();
    const [getData, SetDats] = useState([]);
    const [formDatas, SetFormDatas] = useState({
        title: "",
        body: "",
        userId: "",
    });
    const { body, userId, title } = formDatas;
    const handlechnagesbox = (e) => {
        SetFormDatas({ ...formDatas, [e.target.name]: e.target.value });
    };
    // /useEffect methods call start

    useEffect(() => {
        getEDitDataSetValue();
    }, []);

    // useEffect Call End methods

    // get data start

    const getEDitDataSetValue = () => {
        getKlaiaIdDataGet(id)
            .then((res) => {
                console.log(res.data);
                SetFormDatas(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // end data get methods
    const submits = (e) => {
        e.preventDefault();
        console.log("over all", formDatas);
        PutData(formDatas, id)
            .then((res) => {
                console.log(res.data);
                usehistory.push("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <button onClick={() => usehistory.goBack()}>Back</button>
            <form onSubmit={submits}>
                <div>
                    <label>Title</label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Enter u r Title"
                        value={title}
                        onChange={handlechnagesbox}
                    />
                </div>
                <div>
                    <label>Body</label>
                    <input
                        name="body"
                        type="text"
                        placeholder="Enter u r body"
                        value={body}
                        onChange={handlechnagesbox}
                    />
                </div>
                <div>
                    <label>userId</label>
                    <input
                        name="userId"
                        type="text"
                        placeholder="Enter u r userId"
                        value={userId}
                        onChange={handlechnagesbox}
                    />
                </div>
                {/* <div>
                    <label>Description</label>
                    <input
                        name="description"
                        type="text"
                        placeholder="Enter u r description"
                        value={getData.description}
                        onChange={handlechnagesbox}
                    />
                </div>
                <div>
                    <label>Category</label>
                    <input
                        name="category"
                        type="text"
                        placeholder="Enter u r category"
                        value={getData.category}
                        onChange={handlechnagesbox}
                    />
                </div>
                <div>
                    <label>Count</label>
                    <input
                        name="count"
                        type="text"
                        placeholder="Enter u r count"
                        value={getData.count}
                        onChange={handlechnagesbox}
                    />
                </div>
                <div>
                    <label>Rate</label>
                    <input
                        name="rate"
                        type="text"
                        placeholder="Enter u r rate"
                        value={getData.rate}
                        onChange={handlechnagesbox}
                    />
                </div> */}

                <button type="submit" className="btn btn-primary">
                    Update Changes
                </button>
            </form>
        </div>
    );
}

export default Edit;
