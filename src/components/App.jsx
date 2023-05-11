import { Component } from "react";
import Section from "./feedback/section";
import FeedbackOptions from "./feedback/feedbackoptions";
import Statistics from "./feedback/statistics";
import css from "./feedback/feedback.module.css"


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleVote = (name) => {
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }))
  }

  countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad)
  countPositiveFeedbackPercentage = () => (Math.round(((this.state.good / this.countTotalFeedback()) * 100)))

  render() {
    return (
      <div className={css.INeedAWrapperNow}>
        <Section title="Please leave feedback">
          {<div className={css.feedbackOptions}>
            <FeedbackOptions options="good" handleVote={this.handleVote} />
            <FeedbackOptions options="neutral" handleVote={this.handleVote} />
            <FeedbackOptions options="bad" handleVote={this.handleVote} />
          </div>}
        </Section >
        <Section title="Statistics">
          <Statistics state={this.state} countTotalFeedback={this.countTotalFeedback} countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} />
        </Section >
      </div>
    )

  };
};
