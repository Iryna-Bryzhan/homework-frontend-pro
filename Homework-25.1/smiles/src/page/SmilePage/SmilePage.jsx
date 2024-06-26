import React from "react";
import { SmileList } from "../../components/SmileList/SmileList";
import { Result } from "../../components/Result/Result";

export class SmilePage extends React.Component {
  constructor(props) {
    super(props);
    const savedCount = JSON.parse(localStorage.getItem("smileCounts")) || [0, 0, 0, 0, 0];
    const savedShowResult = JSON.parse(localStorage.getItem("showResult")) || false;
    this.state = {
      count: savedCount,
      showResult: savedShowResult,
    };
  }

  handleSmileClick = (index) => {
    const newCount = [...this.state.count];
    newCount[index-1]++;
    this.setState({ count: newCount }, () => {
      localStorage.setItem("smileCounts", JSON.stringify(newCount));
    });
  };

  handleShowResult = () => {
    this.setState({ showResult: true }, () => {
      localStorage.setItem("showResult", JSON.stringify(true));
    });
  };

  handleClearResults = () => {
    const newCount = [0, 0, 0, 0, 0];
    this.setState({ count: newCount, showResult: false }, () => {
      localStorage.setItem("smileCounts", JSON.stringify(newCount));
      localStorage.setItem("showResult", JSON.stringify(false));
    });
  };

  render() {
    return (
      <div className="smile-container">
        <SmileList count={this.state.count} onSmileClick={this.handleSmileClick} />
        <Result
          count={this.state.count}
          showResult={this.state.showResult}
          onShowResult={this.handleShowResult}
          onClearResults={this.handleClearResults}
        />
      </div>
    );
  }
}
