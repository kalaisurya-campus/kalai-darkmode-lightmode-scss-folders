import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { PostData } from "../api/Post";
function Addusers(props) {
    const usehistory = useHistory();
    const [formDatas, SetFormDatas] = useState({
        title: "",
        body: "",
        userId: "",
    });
    const { title, body, userId } = formDatas;
    const handlechangesbox = (e) => {
        SetFormDatas({ ...formDatas, [e.target.name]: e.target.value });
    };
    const submits = (e) => {
        e.preventDefault();
        e.target.reset();
        // console.log("onsubmit running");

        console.log("over all", formDatas);
        var datas = formDatas;
        // SetFormDatas({});

        PostData(datas)
            .then((res) => {
                console.log(res.data);
                // setTimeout(() => {

                usehistory.push("/");
                // location.reload(false);
                // }, 5000);
            })
            .catch((err) => {
                console.log(err);
            });
        document.getElementById("create-course-form").reset();
        SetFormDatas();

        // window.location.reload(false);
    };
    return (
        <div>
            <button onClick={() => usehistory.goBack()}>Back</button>
            <form onSubmit={submits} id="create-course-form">
                <div>
                    <label>Title</label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Enter u r Title"
                        value={formDatas.title}
                        onChange={handlechangesbox}
                    />
                </div>
                <div>
                    <label>userId</label>
                    <input
                        name="userId"
                        type="text"
                        placeholder="Enter u r userId"
                        value={formDatas.userId}
                        onChange={handlechangesbox}
                    />
                </div>
                <div>
                    <label>Body</label>
                    <input
                        name="body"
                        type="text"
                        placeholder="Enter u r body"
                        value={formDatas.body}
                        onChange={handlechangesbox}
                    />
                </div>
                {/* <div>
                    <label>Category</label>
                    <input
                        name="category"
                        type="text"
                        placeholder="Enter u r category"
                        value={formDatas.category}
                        onChange={handlechnagesbox}
                    />
                </div>
                <div>
                    <label>Count</label>
                    <input
                        name="count"
                        type="text"
                        placeholder="Enter u r count"
                        value={formDatas.count}
                        onChange={handlechnagesbox}
                    />
                </div>
                <div>
                    <label>Rate</label>
                    <input
                        name="rate"
                        type="text"
                        placeholder="Enter u r rate"
                        value={formDatas.rate}
                        onChange={handlechnagesbox}
                    />
                </div> */}

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Addusers;
