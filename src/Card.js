import React, { useState } from "react";

const Card = props => {
  // const [disable, setDisable] = useState(false);
  // setDisable(true);

  return (
    <div className="col-lg-4">
      <div className="card">
        <img src={props.data.image} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <p className="card-text">{props.data.description}</p>
          <p>Rs.{props.data.price} </p>

          <button
            className="btn btn-primary"
            //disabled={!props.data.disable}
            onClick={() => {
              props.handleCart(props.data.id);
            }}
          >
            Add to Cart
          </button>

          <button
            className="btn1 btn-primary"
            onClick={() => props.increment(props.data.id)}
          >
            +
          </button>
          <span style={{ marginLeft: "5%" }}>{props.quantity}</span>

          {/* <button
            className="btn1 btn-primary"
            disabled={props.data.disable}
            onClick={() => props.decrement(props.data.id)}
          >
            -
          </button> */}

          { (props.quantity) <= 1 ? <button
            className="btn1 btn-primary"
            disabled={props.data.disable}
            onClick={() => props.decrement(props.data.id)}
          >
            -
          </button> : <button
            className="btn1 btn-primary"
           
          onClick={() => props.decrement(props.data.id)}
          >-</button>}
        </div>
      </div>
    </div>
  );
};

export default Card;
