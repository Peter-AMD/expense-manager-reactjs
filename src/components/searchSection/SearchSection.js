import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';
import { searchExpenseList } from '../../redux/actions';

class SearchSection extends Component {
  searchExpense = event => {
    event.key === 'Enter' && this.props.searchExpenseList(event.target.value)
  }
  render() {
    return (
      <div className="ui category search searchSection-wrapper">
        <div className="ui icon input">
          <input className="prompt" onKeyPress={this.searchExpense}  type="text" placeholder="Search by title..." />
          <i className="search icon"></i>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default connect(null, { searchExpenseList })(SearchSection);