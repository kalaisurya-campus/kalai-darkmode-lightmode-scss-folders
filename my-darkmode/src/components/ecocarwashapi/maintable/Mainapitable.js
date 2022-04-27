import React, { useEffect, useState, useRef } from "react";
import { EditDummeyApi, getDummeyApi } from "../api/GEt";
import { Modal } from "bootstrap";
import "./styles/Mians.scss";
import EcoModalPop from "../ecomodal/EcoModalPop";
import { Alert } from "bootstrap";
import { Link } from "react-router-dom";
import { patchMethodData } from "../api/Patch";
import AddModelPopup from "../addmodelpop/AddModelPopup";
import EditDataModels from "../editDataMOdels/EditDataModels";

function Mainapitable(props) {
    const [DataSet, setDataSet] = useState([]);
    const modalRes = useRef();
    const [mainData, SetMainData] = useState({
        userId: "",
        title: "",
        body: "",
    });

    const [sample, SetSample] = useState([]);

    const { userId, title, body } = mainData;
    const handlechnages = (e) => {
        SetMainData({ ...mainData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        getEcoCarWash();
    }, []);

    const getEcoCarWash = () => {
        getDummeyApi()
            .then((res) => {
                // console.log(res.data);
                setDataSet(res.data);
                // showModal();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    // const editData = (id) => {
    //     alert(id);
    //     EditDummeyApi(id)
    //         .then((res) => {
    //             console.log(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     showModal();
    // };

    const showModal = () => {
        const modalEle = modalRes.current;
        const bsModal = new Modal(modalEle, {
            backdrop: "static",
            keyboard: false,
        });
        bsModal.show();
    };

    const hideModal = () => {
        const modalEle = modalRes.current;
        const bsModal = Modal.getInstance(modalEle);
        bsModal.hide();
        this.props.editLeaveData("");
    };
    const submits = (e, id) => {
        e.preventDefault();
        patchMethodData(id, mainData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <div>
                <h1>welxcome</h1>
                <AddModelPopup />
                <div>
                    <div className="lists">
                        <div>id</div>
                        <div>title</div>
                        <div>name</div>
                        <div>description</div>
                    </div>

                    {DataSet.map((items, index) => {
                        return (
                            <div className="mains" key={index}>
                                <div className="lists">
                                    <div>{items.id}</div>
                                    <div>{items.userId}</div>
                                    <div>{items.title}</div>
                                    <div>{items.body}</div>
                                    <div>
                                        <EditDataModels id={items.id} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* modal popup page  start*/}

            <p
                type="button"
                class="btn btns"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            ></p>

            <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
                ref={modalRes}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                EDit Data Table
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={submits}>
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
                                <button type="submit">Submit</button>
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
                            <button type="button" class="btn btn-primary">
                                Understood
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal pop page end */}
        </>
    );
}

export default Mainapitable;
