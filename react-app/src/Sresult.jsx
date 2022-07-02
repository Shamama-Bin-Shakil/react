import React from "react";

const Sresult = (props) => {
    console.log(props);
    var img = `https://source.unsplash.com/400x400/?${props.query}`;
    console.log(img);
    return (
        <>
        <div className="container">
            <img src={img} alt="Images" />
        </div>        
        </>
    )

}
export default Sresult;