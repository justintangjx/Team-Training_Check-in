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
  handleChangeForNameInput(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeForWeeklyScoreInput(event) {
    this.setState({ weeklyScore: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addInput(this.state.name, this.state.weeklyScore);
  }

  render() {
    const { name, weeklyScore } = this.state;
    const checkForTwoEmptyFields = name === "" || weeklyScore === "";
    return (
      <form>
        <div className="form-group">
          <h3>
            <label id="nameInput">Teammate's name</label>
          </h3>
          <input
            type="name"
            className="form-control"
            id="nameInput"
            aria-describedby="nameInput"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChangeForNameInput}
          />
        </div>

        <div className="form-group">
          <h3>
            <label id="exampleSelect1">
              On a scale of 1 to 10, how was your week?
            </label>
          </h3>
          <select
            className="form-control"
            id="exampleSelect1"
            // aria-describedby="scoreInput"
            // placeholder="Enter score between 1 to 10"
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
          <small id="Help" className="form-text text-muted">
            Share how you feel, honestly :)
          </small>
        </div>
        <div className="feedback-form-actions text-center">
          {!checkForTwoEmptyFields && (
            <button type="button" className="btn btn-primary btn-lg" onClick={this.handleSubmit} >
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
