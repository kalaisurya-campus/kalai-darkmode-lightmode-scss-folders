import React, { useEffect, useState } from "react";
import { GetContextDataProviders, GetPostsData } from "./api/Get";
import NotesContextdatas from "./NoteContext";

function DataProviders(props) {
    const [first, Setfirst] = useState([]);
    const [second, Setsecond] = useState([]);
    const [loadings, SetLoadings] = useState(false);
    const [loadingsnew, SetLoadingsnew] = useState(false);

    useEffect(() => {
        GetDataapi();
        GetPostsDatas();
    }, []);

    const GetDataapi = () => {
        GetContextDataProviders()
            .then((res) => {
                SetLoadings(true);
                Setfirst(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const GetPostsDatas = () => {
        GetPostsData()
            .then((res) => {
                SetLoadingsnew(true);
                Setsecond(res.data);
                console.log(res.data, "posts");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    console.log("firsts", first);
    return (
        // <NotesContextdata.Provider value={first}>
        //     {props.children}
        // </NotesContextdata.Provider>
        <NotesContextdatas.Provider
            value={{ first, loadings, second, loadingsnew }}
        >
            {props.children}
        </NotesContextdatas.Provider>
    );
}

export default DataProviders;
