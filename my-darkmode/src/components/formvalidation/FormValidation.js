import React from "react";
import { useForm } from "react-hook-form";
function FormValidation(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <div className="inside px-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>FirstName</label>
                        <br />
                        <input
                            {...register("firstname", { required: true })}
                            type="text"
                            name="firstname"
                        ></input>
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
                        ></input>
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
                        ></input>
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
                                    value: "\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b",
                                    message: "not",
                                },
                            })}
                            type="text"
                            name="email"
                        ></input>
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
                        ></input>
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
                        ></input>
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
