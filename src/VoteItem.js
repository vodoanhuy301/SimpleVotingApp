import React, { Component } from "react";
import PropTypes from "prop-types";
import "./item.scss";
class VoteItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, vote, handleClickVote } = this.props;
    return (
      <div className="vote-item">
        <h3 className="title">{title}</h3>
        <h3 className="vote">{vote}</h3>
        <button
          className="vote-btn"
          onClick={() => {
            handleClickVote(title);
          }}
        >
          Vote
        </button>
      </div>
    );
  }
}

VoteItem.propTypes = {};

export default VoteItem;
