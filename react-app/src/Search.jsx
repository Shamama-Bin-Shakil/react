import React, { useState } from "react";
import Header from "./Router/Header";
import Sresult from "./Sresult";

const Search = () => {
    const [val, setValue] = useState("");
    const input = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <Header />
            <div className="container">
                <input
                    type="text"
                    value={val}
                    onChange={input}
                    placeholder="Search Images"
                />
            </div>
            {val === "" ? null : <Sresult query={val} />}
        </>
    );
};
export default Search;
