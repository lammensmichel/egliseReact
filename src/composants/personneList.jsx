/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { getListPersonnes, getPersonne } from '../actions/personnesAction';

@connect(store => (
  {
    persones: store.personnes.persones,
    selectedPersone: store.personnes.selectedPersone,
  }
))

class personneList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getListPersonnes());
  }

  render() {
    const { persones } = this.props;
    let listpersonne = '';
    if (persones) {
     listpersonne = persones.map(personne => <h1 key={personne._id}>{personne.nom} {personne.prenom}</h1>);
    }
    return <div> <h1>Welcome to personneList</h1>
                {listpersonne}
          </div>;
  }
}

export default personneList;
