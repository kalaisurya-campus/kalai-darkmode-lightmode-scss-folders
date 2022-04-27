import React, { useState } from "react";

function Forms(props) {
    const [names, SetName] = useState({
        name: "",
        age: "",
        place: "",
        address: "",
    });
    const { name, age, address, place } = names;
    const handlechage = (e) => {
        SetName({ ...names, [e.target.name]: e.target.value });
    };
    const handlesubmits = (e) => {
        e.preventDefault();
        console.log(name, age, place, address);
    };
    return (
        <div>
            <form onSubmit={handlesubmits}>
                <div>
                    <label>Name</label>
                    <input onChange={handlechage} name="name" value={name} />
                </div>
                <div>
                    <label>Age</label>
                    <input onChange={handlechage} name="age" value={age} />
                </div>
                <div>
                    <label>Place</label>
                    <input onChange={handlechage} name="place" value={place} />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        onChange={handlechage}
                        name="address"
                        value={address}
                    />
                </div>
                <button type="submit" className="mt-5">
                    SUBMIT
                </button>
            </form>
        </div>
    );
}

export default Forms;
