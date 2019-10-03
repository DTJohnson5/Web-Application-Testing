import React from "react";

const Display = props => {
  return (
    <>
      <div className="Count">
          <div className="balls">
              Balls: {`${props.getBalls()}`} 
          </div>
          <div className="strikes">
              Strikes: {`${props.getStrikes()}`}
          </div>
          <div className="outs">
              Outs: {`${props.getOuts()}`}
          </div>        
      </div>
    </>
  );
};

export default Display;
