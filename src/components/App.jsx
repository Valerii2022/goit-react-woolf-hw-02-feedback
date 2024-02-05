import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  handleBtnClick = value => {
    if (value === 'good') {
      this.setState(prev => {
        return { good: prev.good + 1 };
      });
    }
    if (value === 'neutral') {
      this.setState(prev => {
        return { neutral: prev.neutral + 1 };
      });
    }
    if (value === 'bad') {
      this.setState(prev => {
        return { bad: prev.bad + 1 };
      });
    }
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback() {
    this.setState(prev => {
      return { total: prev.total + 1 };
    });
  }

  countPositiveFeedbackPercentage() {
    this.setState(() => {
      return {
        percentage: Math.round((this.state.good / this.state.total) * 100),
      };
    });
  }

  render() {
    return (
      <div>
        <h2>Please laeve feedback</h2>
        <ul>
          <li>
            <button onClick={() => this.handleBtnClick('good')}>Good</button>
          </li>
          <li>
            <button onClick={() => this.handleBtnClick('neutral')}>
              Neutral
            </button>
          </li>
          <li>
            <button onClick={() => this.handleBtnClick('bad')}>Bad</button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total:{this.state.total}</li>
          <li>Percentage:{this.state.percentage}%</li>
        </ul>
      </div>
    );
  }
}
