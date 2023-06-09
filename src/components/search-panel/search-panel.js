import { Component } from 'react';
import './search-panel.css';

class SeachPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <input type="text"
      className="form-control search-input sear"
      placeholder="Найти сотрудника"
      value={this.state.term}
      onChange={this.onUpdateSearch}/>
    )
  }
}

export default SeachPanel;