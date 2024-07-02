import React from "react";
import Smile1 from "../../img/icon-1.png";
import Smile2 from "../../img/icon-2.png";
import Smile3 from "../../img/icon-3.png";
import Smile4 from "../../img/icon-4.png";
import Smile5 from "../../img/icon-5.png";

const smiles = [Smile1, Smile2, Smile3, Smile4, Smile5];

function SmileList({ count, onSmileClick }) {
  const handleSmileClick = (event) => {
    const index = event.currentTarget.getAttribute("data-index");
    onSmileClick(index);
  };

  return (
    <div>
      <h1>Голосування за найкращий смайлик</h1>
      <div className="smiles">
        {smiles.map((smile, index) => (
          <div
            key={index}
            className="smile"
            data-index={index}
            onClick={handleSmileClick}
          >
            <img src={smile} alt={`Smile${index + 1}`} />
            <div className="count">{count[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmileList;
