import { Component } from "react";
import Section from "./feedback/section";


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleGoodVote = () => {
    this.setState(({ good }) => ({ good: good + 1 }))
  }
  handleNeutralVote = () => {
    this.setState(({ neutral }) => ({ neutral: neutral + 1 }))
  }
  handleBadVote = () => {
    this.setState(({ bad }) => ({ bad: bad + 1 }))
  }

  countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad)
  countPositiveFeedbackPercentage = () => (Math.round(((this.state.good / this.countTotalFeedback()) * 100)))

  render() {
    return (
      <Section
        title="Please leave feedback"
        state={this.state}
        handleGoodVote={this.handleGoodVote}
        handleNeutralVote={this.handleNeutralVote}
        handleBadVote={this.handleBadVote}
        countTotalFeedback={this.countTotalFeedback}
        countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
      ></Section>
    )
  };
};
