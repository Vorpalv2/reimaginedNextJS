import React from "react";

function Card() {
  return (
    <div>
      <div className="card w-70 mx-4 my-4 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
