import React, { useEffect, useState } from "react";
import { getKalaieditdata } from "../api/GET";
import { NavLink } from "react-router-dom";
import "./styles/MainView.scss";
import { deletemethods } from "../api/Delete";
import WaveAnimation from "../wavesanimation/WaveAnimation";
function MainView(props) {
    const [emptyGet, SetGetDatas] = useState([]);
    useEffect(() => {
        getMainDatas();
    }, []);
    const getMainDatas = () => {
        getKalaieditdata()
            .then((res) => {
                console.log("kalai", res.data);
                SetGetDatas(res.data.reverse());
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deltesdataoverall = (id) => {
        deletemethods(id)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        alert("delete this message successfully");
    };
    return (
        <>
            <NavLink to="/add">
                <button
                    className="btn btn-primary mb-3 p-2"
                    style={{ marginLeft: "20px" }}
                >
                    Add +
                </button>
            </NavLink>
            <div>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">userId</th>
                            <th scope="col">Title</th>
                            <th scop="col">Body</th>
                            {/* <th scope="col">Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Rating Count</th>
                            <th scope="col">Rating Rate</th> */}
                            <th scop="col">View</th>
                            <th scop="col">Edit</th>
                            <th scop="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emptyGet.map((item, index) => (
                            <tr>
                                <th scop="row">{item.id}</th>
                                <td>{item.title}</td>
                                <td>{item.userId}</td>
                                <td>{item.body}</td>
                                {/* <td>{item.price}</td> */}
                                {/* <td>{item.description}</td> */}
                                {/* <td>{item.category}</td> */}
                                {/* <td>{item.rating.count}</td> */}
                                {/* <td>{item.rating.rate}</td> */}
                                <td>
                                    <NavLink
                                        to={`/view/${item.id}`}
                                        className="links"
                                    >
                                        {" "}
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </NavLink>
                                </td>

                                <td>
                                    <NavLink
                                        to={`/edit/${item.id}`}
                                        className="edit"
                                    >
                                        <ion-icon name="create-outline"></ion-icon>
                                    </NavLink>
                                </td>
                                <td>
                                    <NavLink
                                        to=""
                                        className="delete"
                                        onClick={() =>
                                            deltesdataoverall(item.id)
                                        }
                                    >
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </NavLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <WaveAnimation />
        </>
    );
}

export default MainView;
