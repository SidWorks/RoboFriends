import React, { Component } from "react";
import { robots } from "../robots";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        {
          this.setState({ robots: users });
        }
      });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else
      return (
        <div className="tc">
          <h1 className="tc f1">Robofriends</h1>
          <SearchBox SearchChange={this.onSearchChange} />
          <br></br>

          <Scroll>
            <Cardlist robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;
