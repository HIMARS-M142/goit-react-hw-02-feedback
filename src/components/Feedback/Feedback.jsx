import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onGoodBtnClick = e => {
    this.setState(({ good }) => ({ good: good + 1 }));
  };
  onNeutralBtnClick = e => {
    this.setState(({ neutral }) => ({ neutral: neutral + 1 }));
  };
  onBadBtnClick = e => {
    this.setState(({ bad }) => ({ bad: bad + 1 }));
  };
  countTotalFeedback = () => {
    return <p>Total:{this.state.bad + this.state.good + this.state.neutral}</p>;
  };
  countPositiveFeedbackPercentage = () => {
    return (
      <p>
        Positive feedback:{' '}
        {Math.round(
          (this.state.good /
            (this.state.good + this.state.bad + this.state.neutral)) *
            100
        ) || 0}
        %
      </p>
    );
  };
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button onClick={this.onGoodBtnClick} name="good">
            Good
          </button>
          <button onClick={this.onNeutralBtnClick} name="neutral">
            Neutral
          </button>
          <button onClick={this.onBadBtnClick} name="bad">
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <this.countTotalFeedback />
        <this.countPositiveFeedbackPercentage />
      </div>
    );
  }
}
export default Feedback;
