import React, { useState, useEffect } from "react";
import "./App.css";
import "./Data.js";
import SetDate from "./SetDate.js"
const axios = require('axios');


function Data() {
    let date = SetDate();
    const [D, setCDay] = useState(["Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading..."]);
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=dRFn6isk4LoBjKHGjYAGfz8yYtLaYI5ZwmL7Opc0&date=" + date)
            .then(res => setCDay(Object.values(Object.values(res)[0])))
            .catch(function (error) {
                console.log(error, "Error")
            });
    }, [date]);
    ;
    return D;
}
export default Data;