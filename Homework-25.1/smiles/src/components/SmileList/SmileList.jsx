import React from "react";
import Smile1 from "../../img/icon-1.png";
import Smile2 from "../../img/icon-2.png";
import Smile3 from "../../img/icon-3.png";
import Smile4 from "../../img/icon-4.png";
import Smile5 from "../../img/icon-5.png";

export class SmileList extends React.Component {
    handleSmileClick = (event) => {
        const index = event.currentTarget.getAttribute("data-index");
        this.props.onSmileClick(index);
      };
  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>Голосування за найкращий смайлик</h1>
        <div className="smiles">
          <div className="smile" data-index="1" onClick={this.handleSmileClick}>
            <img src={Smile1} alt="Smile1" />
            <div className="count">{count[0]}</div>
          </div>
          <div className="smile" data-index="2" onClick={this.handleSmileClick}>
            <img src={Smile2} alt="Smile2" />
            <div className="count">{count[1]}</div>
          </div>
          <div className="smile" data-index="3" onClick={this.handleSmileClick}>
            <img src={Smile3} alt="Smile3" />
            <div className="count">{count[2]}</div>
          </div>
          <div className="smile" data-index="4" onClick={this.handleSmileClick}>
            <img src={Smile4} alt="Smile4" />
            <div className="count">{count[3]}</div>
          </div>
          <div className="smile" data-index="5" onClick={this.handleSmileClick}>
            <img src={Smile5} alt="Smile5" />
            <div className="count">{count[4]}</div>
          </div>
        </div>
      </div>
    );
  }
}
