import React, { Component } from "react";
import { Statistics } from "./Statistics.jsx";
import { Section } from "./Section.jsx";
import { FeedbackOptions } from "./FeedbackOptions.jsx";

import "../css/default.css";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickHandler = (evt) => {
    this.setState({
      [evt.target.id]: this.state[evt.target.id] + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : ((this.state.good / total) * 100).toFixed(0);
  };

  render() {
    return (
      <>
        <Section title={"Please, leave feedback"}>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.clickHandler}
          />
        </Section>
        <Section title={"Statistics"}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
