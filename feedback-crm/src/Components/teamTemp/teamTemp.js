
import React, { Component } from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import seedData from "./seedData";
import TeamScoreForm from './teamTempForm';


class TeamData extends Component {
  constructor() {
    super();
    this.state = {
      teamData: seedData,
      newData: { name: " ", weeklyScore: " "}
    };
  }

  saveInput(event) {
    this.setState({
      newData: {
        name: event.target.value,
        weeklyScore: event.target.value
      }
    });
  }

  render() {
    return (
      <div >
        <br />
        <TeamScoreForm 
        saveInput={this.saveInput.bind(this)}
        addInput={this.addInput.bind(this)}/>
        <br />
      <div id="simple-bar-chart">
        <BarChart
          width={500}
          height={300}
          data={seedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis ticks={[2, 4, 6, 8, 10]} type="number" />
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          <Bar
            dataKey="How was this week on a scale of 1 to 10"
            fill="#8884d8"
          />
        </BarChart>
      </div>
      </div>
    );
  }

  addInput(name, weeklyScore) {
    const exampleInput = {
      name: name,
      "How was this week on a scale of 1 to 10": weeklyScore
    };

    this.setState({
      teamData: this.state.teamData.concat([exampleInput])
    });
  }
}
export default TeamData;
