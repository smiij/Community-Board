import React from "react";

const Eateries = (props) => {
    return (
        <div className="Eateries">
        <img src={props.img} alt='Store Image' />
        <h2>{props.eaterie}</h2>
        <h3>{props.description}</h3>
        </div>
    );
}

export default Eateries;