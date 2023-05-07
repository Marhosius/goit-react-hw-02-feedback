import { Component } from "react";
import css from "./feedback.module.css";
import PropTypes from "prop-types";

export class FeedbackOptions extends Component {
    render() {
        return (
            <button onClick={this.props.onLeaveFeedback} className={css.feedbackButton}>{this.props.options}</button>
        )
    }
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.string.isRequired
}

export default FeedbackOptions