import React, { useState, useEffect } from "react";
import SetDate from "./SetDate.js"
function DateEntry(day) {
    return (
        <form>
            <label>
                Date Format: "YYYY-MM-DD"
    <input type="text" />
            </label>
            <input type="submit" value="Submit" />
        </form>);

};
export default DateEntry;