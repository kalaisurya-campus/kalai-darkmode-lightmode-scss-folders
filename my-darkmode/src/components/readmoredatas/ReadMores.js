import axios from "axios";
import React, { useEffect, useState } from "react";

function ReadMores(props) {
    const [Data, setData] = useState([]);
    const [limits, SetLimit] = useState(5);
    const [serach, setSerach] = useState("");
    useEffect(() => {
        getDatasSet();
    }, []);
    const counts = () => {
        // console.log("gfdg");
        SetLimit(limits + 5);
    };
    const getDatasSet = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const slicedata = Data.slice(0, limits);
    return (
        <>
            <input
                type="text"
                value={serach}
                onChange={(e) => setSerach(e.target.value)}
            />
            <div className="row gap-4">
                {slicedata
                    .filter((city) => city.title.toLowerCase().includes(serach))
                    .map((items, index) => {
                        return (
                            <div class="card col-lg-2">
                                <img
                                    src="https://images.news18.com/ibnlive/uploads/2021/08/1628056310_dogdrinking-1200x800.png"
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">{items.title}</h5>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <button onClick={() => counts()}>Read More...</button>
        </>
    );
}

export default ReadMores;
