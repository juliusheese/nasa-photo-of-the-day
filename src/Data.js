import React, { useState, useEffect } from "react";
import "./App.css";
import "./Data.js";
const axios = require('axios');

function Data() {
    const [D, setD] = useState(["Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading..."]);
    const [date, setDate] = useState("2020-08-24")
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=dRFn6isk4LoBjKHGjYAGfz8yYtLaYI5ZwmL7Opc0&date=" + date)
            .then(res => setD(Object.values(Object.values(res)[0])))
            .catch(function (error) {
                console.log(error, "Error in fetching market updates")
            });
    }, [date]);
    ;
    return D;
}
export default Data;