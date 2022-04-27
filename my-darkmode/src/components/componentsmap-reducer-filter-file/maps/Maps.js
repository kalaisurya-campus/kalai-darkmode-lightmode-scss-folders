import React, { useState, useContext } from "react";
import notesContextdatas from "../../usecontexts/NoteContext";

import Forms from "../forms/Forms";
import SWitchMethod from "../switchmethod/SWitchMethod";
const ReducerDataNumbers = [6, 5, 2, 8, 10, 30, 20, 50, 100, 250, 35];
function Maps(props) {
    // sort methods code reactjs
    const [numbers, SetNumbers] = useState([
        100, 5, 20, 6, 1, 1000, 500, 600, 35, 29, 12, 21,
    ]);

    const [finds, SetFinds] = useState([
        10, 156, 2, 5, 8, 9, 1000, 690, 890, 480, 3889,
    ]);

    const [loading, SetLoading] = useState(true);

    // dummy array content datas start array table
    const [findsname, SetFindNames] = useState([
        {
            id: 1,
            first_name: "kalai",
            last_name: "surya",
            place: "chennai1",
            phone: "897656565",
        },
        {
            id: 2,
            first_name: "main",
            last_name: "kumar",
            place: "chennai2",
            phone: "7587879587",
        },
        {
            id: 3,
            first_name: "thala",
            last_name: "kumar",
            place: "chennai3",
            phone: "967465898534",
        },
    ]);

    const [sumnumber, SetNumberss] = useState(0);
    // dummy content end datas

    const [filters, SetFilters] = useState([
        10, 156, 2, 5, 8, 9, 1000, 690, 890, 480, 3889,
    ]);

    // stort method let stored data
    // let numbersorts = numbers.sort();

    // end sort

    // FIND METHOD CODE REACTS START

    let resultfind = finds.find((results) => {
        return results > 20;
    });

    // end find methods

    // start filter methods
    let filterresulkt = filters.filter((r) => {
        return r > 100;
    });

    // end filetr methods

    const handleclickdata = () => {
        const totals = ReducerDataNumbers?.reduce((pre, current) => {
            return pre + current;
        });
        SetNumberss(totals);
    };

    const px = useContext(notesContextdatas);
    console.log(px, "no");
    return (
        <>
            <div>
                {/* resutl sort method */}
                {/* <p>{numbersorts + ""}</p> */}
                <p>{resultfind}</p>
                {/* <p>results+{filterresulkt + ""}</p> */}
                {/* {findsname
                    ? findsname.map((items, index) => {
                          return (
                              <div key={index}>
                                  <p>
                                      id:
                                      {items.id +
                                          " " +
                                          items.first_name +
                                          " " +
                                          items.last_name}
                                  </p>
                              </div>
                          );
                      })
                    : "no data"} */}

                {findsname.length === 0 && <div>No Data Found</div>}
                {findsname.length > 1 && (
                    <div>
                        {findsname.map((items, index) => {
                            return (
                                <div key={index}>
                                    <p>{items.first_name}</p>
                                </div>
                            );
                        })}
                    </div>
                )}
                <div>
                    <p>{sumnumber}</p>
                    <button onClick={handleclickdata}>
                        Click Reduce Buttons
                    </button>
                </div>
            </div>
            <Forms />
            <div>
                <SWitchMethod />
            </div>
            <div>
                {/* {px.map((items, index) => {
                    return (
                        <div>
                            <p>{items.name}</p>
                            <p>{items.email}</p>
                        </div>
                    );
                })} */}
                {/* {px.length === 0 && <div>No Data Found</div>} */}
                {/* {px.length > 1 && (
                    <div>
                        {px.map((items, index) => {
                            return (
                                <div key={index}>
                                    <p>{items.name}</p>
                                    <p>{items.email}</p>
                                </div>
                            );
                        })}
                    </div>
                )} */}
                {!px.loadings ? (
                    <div>
                        Loading Pursh....{" "}
                        <img
                            src={
                                "https://i.pinimg.com/originals/45/12/4d/45124d126d0f0b6d8f5c4d635d466246.gif"
                            }
                        />
                    </div>
                ) : (
                    <div>
                        {px.first.map((items, index) => {
                            return (
                                <div key={index}>
                                    <p>{items.name}</p>
                                    <p>{items.email}</p>
                                </div>
                            );
                        })}
                    </div>
                )}

                {!px.loadingsnew ? (
                    <div>
                        Loading kalaisurya....{" "}
                        <img
                            src={
                                "https://forums.gameex.com/forums/uploads/monthly_2019_12/RCT_Dark.gif.be4f7aea1087e33c474cea46950e851d.gif"
                            }
                        />
                    </div>
                ) : (
                    <div>
                        {px.second.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p>{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

export default Maps;
