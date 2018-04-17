/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { updatePersonne, createPersonne } from '../actions/personnesAction';


@connect(store => (
  {
    persones: store.personnes.persones,
    selectedPersone: store.personnes.selectedPersone,
  }
))

class personne extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirectListPersonne: false,
    };
  }

  handleSubmit = (event) => {
    const { selectedPersone } = this.props;
    const { dispatch } = this.props;

    let personne = {
      prenom: this.prenom.value,
      nom: this.nom.value,
      dateDeNaissance: moment(this.datedenaissance.value),
    }
    if(selectedPersone._id) {
      personne = { ...personne,  _id: selectedPersone._id };
      console.log('update personne');
      dispatch(updatePersonne(personne));
    }else{
      console.log('create personne');
      dispatch(createPersonne(personne));
    }
    this.state.redirectListPersonne = true;
    event.preventDefault();
  }

  render() {
    const { selectedPersone } = this.props;
     
     this.selectedPersone = selectedPersone;
     if(selectedPersone && selectedPersone.dateDeNaissance){
      selectedPersone.dateDeNaissance = moment(selectedPersone.dateDeNaissance).format('YYYY-MM-DD');
     }
    if( this.state.redirectListPersonne ) {
     return ( <Redirect to="/personneList"/>)
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="prenom">prenom</label>
          <input type="input" ref={input => this.prenom = input}  defaultValue={selectedPersone.prenom} className="form-control" id="prenom" aria-describedby="prenom" placeholder="Enter le prenom" />
        </div>
        <div className="form-group">
          <label htmlFor="nom">nom</label>
          <input type="input"  ref={input => this.nom = input} defaultValue={selectedPersone.nom} className="form-control" id="nom" aria-describedby="nom" placeholder="Enter le nom" />
        </div>
        <div className="form-group">
          <label htmlFor="datedenaissance">date de naissance</label>
          <input type="date" ref={input => this.datedenaissance = input}  data-date-format="DD MMMM YYYY" defaultValue={selectedPersone.dateDeNaissance} className="form-control" id="datedenaissance" aria-describedby="date de naissance" placeholder="Enter la date de naissance" />
        </div>
        <button type="submit" className="btn btn-primary">enregistrer</button>
      </form>
    );
  }
}

export default personne;
