import React, { useState } from "react";
import { useForm } from "react-hook-form";
function FormValidation(props) {
    const [updates, SetUpdates] = useState({
        firstname: "",
        lastname: "",
        middlename: "",
        email: "",
        password: "",
        confirmpassword: "",
    });
    const {
        firstname,
        lastname,
        middlename,
        email,
        password,
        confirmpassword,
    } = updates;
    const handlechnageskey = (e) => {
        SetUpdates({ ...updates, [e.target.name]: e.target.value });
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        console.log("over all datas send api backend", updates);
        alert("update success");
        SetUpdates("").resetForm();
    };
    return (
        <div>
            <div className="inside px-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>FirstName</label>
                        <br />
                        <input
                            {...register("firstname", {
                                required: "no records",
                            })}
                            type="text"
                            name="firstname"
                            value={firstname}
                            onChange={handlechnageskey}
                        ></input>{" "}
                        <br />
                        {errors.firstname && (
                            <span style={{ color: "red" }}>
                                FirtstName field Empty
                            </span>
                        )}
                    </div>
                    <div>
                        <label>LastName</label>
                        <br />
                        <input
                            {...register("lastname", { required: true })}
                            type="text"
                            name="lastname"
                            value={lastname}
                            onChange={handlechnageskey}
                        ></input>{" "}
                        <br />
                        {errors.lastname && (
                            <span style={{ color: "red" }}>
                                LastName field Empty
                            </span>
                        )}
                    </div>
                    <div>
                        <label>MiddleName</label>
                        <br />
                        <input
                            {...register("middlename", { required: true })}
                            type="text"
                            name="middlename"
                            value={middlename}
                            onChange={handlechnageskey}
                        ></input>{" "}
                        <br />
                        {errors.middlename && (
                            <span style={{ color: "red" }}>
                                MiddleName field Empty
                            </span>
                        )}
                    </div>
                    <div>
                        <label>Email</label>
                        <br />
                        <input
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: "no founds",
                                },
                            })}
                            type="text"
                            name="email"
                            value={email}
                            onChange={handlechnageskey}
                        ></input>{" "}
                        <br />
                        {errors.email && (
                            <span style={{ color: "red" }}>
                                Email field Empty
                            </span>
                        )}
                    </div>
                    <div>
                        <label>Password</label>
                        <br />
                        <input
                            {...register("password", { required: true })}
                            type="text"
                            name="password"
                            value={password}
                            onChange={handlechnageskey}
                        ></input>{" "}
                        <br />
                        {errors.password && (
                            <span style={{ color: "red" }}>
                                password field Empty
                            </span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label>ConformPaswword</label>
                        <br />
                        <input
                            {...register("confirmpassword", { required: true })}
                            type="text"
                            name="confirmpassword"
                            value={confirmpassword}
                            onChange={handlechnageskey}
                        ></input>{" "}
                        <br />
                        {errors.confirmpassword && (
                            <span style={{ color: "red" }}>
                                ConformPaswword field Empty
                            </span>
                        )}
                    </div>

                    <input type="submit" value="submit"></input>
                </form>
            </div>
        </div>
    );
}

export default FormValidation;
