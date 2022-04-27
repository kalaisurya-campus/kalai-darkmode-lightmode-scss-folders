import React, { useState, useEffect } from "react";
import { EditDummeyApi } from "../api/GEt";
import { patchMethodData } from "../api/Patch";

function EditDataModels(props) {
    const ids = props.id;
    console.log("os", ids);
    const [seDataStore, SetDataStores] = useState([]);
    const [mainData, SetMainData] = useState({
        userId: "",
        title: "",
        body: "",
    });
    useEffect(() => {
        getMOdelsData();
    }, []);
    const { userId, title, body } = mainData;
    const handlechnages = (e) => {
        SetMainData({ ...mainData, [e.target.name]: e.target.value });
    };
    const Submits = (e) => {
        e.preventDefault();

        patchMethodData(ids, mainData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        // SetMainData("").resetForms();
    };

    const getMOdelsData = () => {
        EditDummeyApi(ids)
            .then((res) => {
                // console.log(res.data);
                SetMainData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <p>{ids}</p>
            <div>
                <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop1"
                >
                    Edit views
                </button>

                <div
                    class="modal fade"
                    id="staticBackdrop1"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    Edit page
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
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditDataModels;
