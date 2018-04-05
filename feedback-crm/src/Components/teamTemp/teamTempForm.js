import React, { Component } from "react";

class TeamScoreForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      weeklyScore: ""
    };
    this.handleChangeForNameInput = this.handleChangeForNameInput.bind(this);
    this.handleChangeForWeeklyScoreInput = this.handleChangeForWeeklyScoreInput.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeForWeeklyScoreInput(event) {
    this.setState({ weeklyScore: event.target.value });
  }

  handleChangeForNameInput(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addFeedback(this.state.name, this.state.weeklyScore);
  }

  render() {
    const { name, weeklyScore } = this.state;
    const checkForTwoEmptyFields = name === "" || weeklyScore === "";
    return (
      <form>
        <div class="form-group">
          <label for="nameInput">Employee's name</label>
          <input
            type="name"
            class="form-control"
            id="nameInput"
            aria-describedby="nameInput"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChangeForNameInput}
          />
        </div>

        <div class="form-group">
          <label for="exampleSelect1">
            On a scale of 1 to 10, how was your week?
          </label>
          <select
            class="form-control"
            id="exampleSelect1"
            value={this.state.weeklyScore}
            onChange={this.handleChangeForWeeklyScoreInput}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <small id="Help" class="form-text text-muted">
            Share how you feel, honestly :)
          </small>
        </div>
        <div className="feedback-form-actions text-center">
          {!checkForTwoEmptyFields && (
            <button type="button" class="btn btn-primary btn-lg">
              Log in your temperature!
            </button>
          )}
          <p />
        </div>
      </form>
    );
  }
}

export default TeamScoreForm;
