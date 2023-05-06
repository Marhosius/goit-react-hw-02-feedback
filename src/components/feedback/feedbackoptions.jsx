import { Component } from "react";

export class FeedbackOptions extends Component {
    render() {
        return (
            <button onClick={this.props.onLeaveFeedback} className="feedback-button">{this.props.options}</button>
        )
    }
}

export default FeedbackOptions