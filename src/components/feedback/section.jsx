import { Component } from "react";
import FeedbackOptions from "./feedbackoptions";
import Statistics from "./statistics";
import css from "./feedback.module.css";
import PropTypes from "prop-types";

class Section extends Component {
    render() {
        return (
            <section className={css.feedback}>
                <h2 className={css.feedbackTitle}>{this.props.title}</h2>
                <div className={css.feedbackOptions}>
                    <FeedbackOptions options="Good" onLeaveFeedback={this.props.handleGoodVote} />
                    <FeedbackOptions options="Neutral" onLeaveFeedback={this.props.handleNeutralVote} />
                    <FeedbackOptions options="Bad" onLeaveFeedback={this.props.handleBadVote} />
                </div>
                <h2 className={css.statisticTitle}>Statistic</h2>
                <Statistics
                    state={this.props.state}
                    countTotalFeedback={this.props.countTotalFeedback}
                    countPositiveFeedbackPercentage={this.props.countPositiveFeedbackPercentage} />
            </section >
        )
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    handleGoodVote: PropTypes.func.isRequired,
    handleNeutralVote: PropTypes.func.isRequired,
    handleBadVote: PropTypes.func.isRequired,
    countTotalFeedback: PropTypes.func.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired,
    state: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
};

export default Section