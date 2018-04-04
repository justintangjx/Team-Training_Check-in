import React, { Component } from "react";

class TeamScoreForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      weeklyScore: ""
    };
    this.handleChangeForNameInput = this.handleChangeForNameInput.bind(this);
    this.handleChangeForWeeklyScoreInput = this.handleChangeForWeeklyScoreInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeForWeeklyScoreInput(event) {
      this.setState({weeklyScore: event.target.value});
  }

  handleChangeForNameInput(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
      event.preventDefault();
      this.addFeedback(this.state.name, this.state.weeklyScore)
  }

  addFeedback()
}

render() {
    const{ name, weeklyScore } = this.state;
    const checkForTwoEmptyFields = name === "" || weeklyScore === "";
    return (
        
    )
}