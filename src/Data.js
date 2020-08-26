import React, { useState, useEffect } from "react";
import "./App.css";
import "./Data.js";
const axios = require('axios');

function Data(d) {
    const [data, setData] = useState();
    const [query, setQuery] = useState(d);

    useEffect(() => {
        const fetchData = () => {
            axios
                .get("https://api.nasa.gov/planetary/apod?api_key=dRFn6isk4LoBjKHGjYAGfz8yYtLaYI5ZwmL7Opc0&date=" + query)
                .then(res => setData(res.data));
        };
        fetchData();
        return fetchData();
    }, []);
    return console.log(data)
}
export default Data;