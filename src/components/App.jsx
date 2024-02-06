import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = value => {
    switch (value) {
      case 'good':
        this.setState(prev => {
          return { good: prev.good + 1 };
        });
        break;
      case 'neutral':
        this.setState(prev => {
          return { neutral: prev.neutral + 1 };
        });
        break;
      case 'bad':
        this.setState(prev => {
          return { bad: prev.bad + 1 };
        });
        break;

      default:
        break;
    }
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage(total) {
    return Math.round((this.state.good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalCount = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(totalCount);
    return (
      <div className="container">
        <Section title={'Please laeve feedback'}>
          <FeedbackOptions handleBtnClick={this.handleBtnClick} />
        </Section>
        <Section title={'Statistics'}>
          {totalCount ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalCount}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
