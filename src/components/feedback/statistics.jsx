import { Component } from "react";
import Notification from "./notification";

export class Statistics extends Component {
    render() {
        if (!this.props.countTotalFeedback()) {
            return (<Notification message="There is no feedback"></Notification>)
        } else {
            return (<div className="feedback-statistic">
                <p className="statistic-info">Good: {this.props.state.good}</p>
                <p className="statistic-info">Neutral: {this.props.state.neutral}</p>
                <p className="statistic-info">Bad: {this.props.state.bad}</p>
                <p className="statistic-info">Total:{this.props.countTotalFeedback()}</p>
                <p className="statistic-info">Positive feedback: {this.props.countPositiveFeedbackPercentage()}%</p>
            </div >)
        }

    }
}

export default Statistics