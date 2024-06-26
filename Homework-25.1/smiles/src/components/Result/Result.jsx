import React from "react";
import Smile1 from "../../img/icon-1.png";
import Smile2 from "../../img/icon-2.png";
import Smile3 from "../../img/icon-3.png";
import Smile4 from "../../img/icon-4.png";
import Smile5 from "../../img/icon-5.png";

const smiles = [Smile1, Smile2, Smile3, Smile4, Smile5];

export class Result extends React.Component {
  render() {
    const { count, showResult, onShowResult, onClearResults } = this.props;
    const maxCount = Math.max(...count);
    const maxIndex = count.indexOf(maxCount);
    const winnerSmile = smiles[maxIndex];

    return (
      <div>
        <button id="result" onClick={onShowResult}>
          Show Result
        </button>
        <button id="clear" onClick={onClearResults}>
          Очистити результати
        </button>
        {showResult && (
          <div className="showResult">
            <h2>Результати голосування:</h2>
            <p>Переможець</p>
            <div className="result-smile">
              <img src={winnerSmile} alt={`Smile${maxIndex + 1}`} />
            </div>
            <div className="result-count">Кількість голосів: {maxCount}</div>
          </div>
        )}
      </div>
    );
  }
}
