import React, { useState, useEffect } from "react";
import { PostDataSEtAccess } from "../api/Post";
import { useHistory } from "react-router-dom";

function AddModelPopup(props) {
    const [mainData, SetMainData] = useState({
        userId: "",
        title: "",
        body: "",
    });
    const usehistory = useHistory();
    console.log("usehistorys",usehistory);

    const [sample, SetSample] = useState([]);

    const { userId, title, body } = mainData;
    const handlechnages = (e) => {
        SetMainData({ ...mainData, [e.target.name]: e.target.value });
    };

    const Submits = (e) => {
        e.preventDefault();
        PostDataSEtAccess(mainData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        SetMainData("").resetForms();
        usehistory.goBack("/models");
    };
    return (
        <div>
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            >
                Add +
            </button>
            <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Add New Users welcome
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={Submits}>
                                <input
                                    type="text"
                                    placeholder="enter userId"
                                    name="userId"
                                    onChange={handlechnages}
                                    value={userId}
                                ></input>
                                <input
                                    type="text"
                                    placeholder="enter title"
                                    name="title"
                                    onChange={handlechnages}
                                    value={title}
                                ></input>
                                <input
                                    type="text"
                                    placeholder="enter body"
                                    name="body"
                                    onChange={handlechnages}
                                    value={body}
                                ></input>
                                <input
                                    type="reset"
                                    value="Reset"
                                    onClick="window.location.reload()"
                                />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddModelPopup;
