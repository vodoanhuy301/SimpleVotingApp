import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import dataList from "./data";
import VoteItem from "./VoteItem";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { list: [] };
  }
  componentWillMount() {
    this.setState({ list: dataList });
  }
  handleClickVote = (name) => {
    console.log("name", name);
    const newList = this.state.list.map((item) => {
      if (item["name"] === name) {
        return Object.assign({}, item, { vote: (item.vote = item.vote + 1) });
      } else return item;
    });
    this.setState({ list: newList });
  };

  render() {
    const sortedData = this.state.list.sort((a, b) => b.vote - a.vote);
    const items = sortedData.map((item) => (
      <VoteItem
        title={item.name}
        vote={item.vote}
        handleClickVote={this.handleClickVote}
      />
    ));
    return <div className="App">{items}</div>;
  }
}

App.propTypes = {};

export default App;
