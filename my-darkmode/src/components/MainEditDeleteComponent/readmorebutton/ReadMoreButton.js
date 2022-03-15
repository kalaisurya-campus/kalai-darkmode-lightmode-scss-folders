import React from "react";
import data from "../backenddata/BackEndData";
function ReadMoreButton(props) {
    return (
        <div className="container w-100">
            <h1>weee</h1>
            <div className="row gap-3">
                {data.cardData.map((items, index) => {
                    return (
                        <div class="card col-lg-3">
                            <img
                                src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900"
                                class="card-img-top"
                                alt={items.name}
                            />
                            <div class="card-body">
                                <h5 class="card-title">{items.name}</h5>
                                <p class="card-text">{items.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ReadMoreButton;
