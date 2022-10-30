import React from "react";
import axios from "axios";
import { useState } from "react";
import Sidebar from "./components/sidebar";
const Test = () => {
    const [bar,setBar] = useState("0px");

    return (
        <>
        <Sidebar/>
        <div className="Body">

            <div className="card">
                <div className="side">
                    test
                </div>
            </div>
        </div>
        </>
    )
}

export default Test;