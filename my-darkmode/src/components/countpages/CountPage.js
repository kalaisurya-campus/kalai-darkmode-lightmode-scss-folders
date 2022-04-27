import React from "react";

import SideBars from "./SideBars";
import "./Appppp.scss";
import Navb from "./Navb";
function CountPage(props) {
    return (
        <div className="apps">
            <div className="tops">
                <Navb />
            </div>
            <div className="sidesed">
                <div className="sidesnavabrs">
                    <SideBars />
                </div>

                <div className="container">
                    <div className="row gap-5">
                        <div className="card col-lg-5">
                            <div className="row">
                                <div className="card col-lg-6">
                                    <div className="d-flex flex-row justify-content-lg-between px-lg-2 gap-2">
                                        <div>
                                            <img
                                                src="https://picsum.photos/id/237/200/300"
                                                style={{
                                                    width: "100px",
                                                    height: "100px",
                                                    borderRadius: "50%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                        <div style={{ overFlow: "hidden" }}>
                                            <p>
                                                To request multiple images of
                                                the same size in your browser,
                                                add the random query param to
                                                prevent the images from being
                                                cached: To request multiple
                                                images of the same size in your
                                                browser, add the random query
                                                param to prevent the images from
                                                being cached: To request
                                                multiple images of the same size
                                                in your browser, add the random
                                                query param to prevent the
                                                images from being cached:
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card col-lg-6">
                                    fsdfsd
                                    <p>
                                        To request multiple images of the same
                                        size in your browser, add the random
                                        query param to prevent the images from
                                        being cached: To request multiple images
                                        of the same size in your browser, add
                                        the random query param to prevent the
                                        images from being cached: To request
                                        multiple images of the same size in your
                                        browser, add the random query param to
                                        prevent the images from being cached:
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card col-lg-5">
                            <div className="row">
                                <div className="card col-lg-6">
                                    <div className="d-flex flex-row justify-content-lg-between px-lg-2 gap-2">
                                        <div>
                                            <img
                                                src="https://picsum.photos/id/237/200/300"
                                                style={{
                                                    width: "100px",
                                                    height: "100px",
                                                    borderRadius: "50%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                        <dibv>
                                            <p>
                                                To request multiple images of
                                                the same size in your browser,
                                                add the random query param to
                                                prevent the images from being
                                                cached: To request multiple
                                                images of the same size in your
                                                browser, add the random query
                                                param to prevent the images from
                                                being cached: To request
                                                multiple images of the same size
                                                in your browser, add the random
                                                query param to prevent the
                                                images from being cached:
                                            </p>
                                        </dibv>
                                    </div>
                                </div>
                                <div className="card col-lg-6">
                                    <p>
                                        To request multiple images of the same
                                        size in your browser, add the random
                                        query param to prevent the images from
                                        being cached: To request multiple images
                                        of the same size in your browser, add
                                        the random query param to prevent the
                                        images from being cached: To request
                                        multiple images of the same size in your
                                        browser, add the random query param to
                                        prevent the images from being cached:
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountPage;
