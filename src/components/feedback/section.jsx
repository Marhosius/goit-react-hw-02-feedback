import { Component } from "react";
import FeedbackOptions from "./feedbackoptions";
import Statistics from "./statistics";

class Section extends Component {
    render() {
        return (
            <section className="feedback">
                <h2 className="feedback-title">{this.props.title}</h2>
                <div className="feedback-options">
                    <FeedbackOptions options="Good" onLeaveFeedback={this.props.handleGoodVote} />
                    <FeedbackOptions options="neutral" onLeaveFeedback={this.props.handleNeutralVote} />
                    <FeedbackOptions options="bad" onLeaveFeedback={this.props.handleBadVote} />
                </div>
                <h2 className="statistic-title">Statistic</h2>
                <Statistics
                    state={this.props.state}
                    countTotalFeedback={this.props.countTotalFeedback}
                    countPositiveFeedbackPercentage={this.props.countPositiveFeedbackPercentage} />
            </section >
        )
    }
}

export default Section