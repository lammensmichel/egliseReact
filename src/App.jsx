import React from 'react';
import { connect } from 'react-redux';
import { getListPersonnes, getPersonne } from './actions/personnesAction';

const mapStateToProps = state => ({
  personnes: state.personnes.persones,
  selectedPersone: state.personnes.selectedPersone,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getListPersonnes());
    this.props.dispatch(getPersonne());
  }

  render() {
    console.log('propos: ', this.props.selectedPersone);
    return <div>salut</div>;
  }
}

export default connect(mapStateToProps)(App);
