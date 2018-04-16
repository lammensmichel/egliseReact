/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getListPersonnes, getPersonne } from '../actions/personnesAction';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import moment from 'moment';

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

  dateFormatter(cell, row, enumObject) {
    return moment(cell).format("DD-MM-YYYY" );
  }

  render() {
    const { persones } = this.props;
    let listpersonne = [];
    if (persones) {
      listpersonne = persones;
    }

    const options = {
      
    };

 return (
    <BootstrapTable
      data={ listpersonne }
      search={ true }
      multiColumnSearch={ true }
      options={ options }
      keyField='_id'
      insertRow
      pagination>
      <TableHeaderColumn width='35%' dataField='nom'>nom</TableHeaderColumn>
      <TableHeaderColumn width='35%' dataField='prenom'>prenom</TableHeaderColumn>
      <TableHeaderColumn width='35%' dataFormat={ this.dateFormatter }  dataField='dateDeNaissance'>date De Naissance</TableHeaderColumn>
    </BootstrapTable>
);

  }

}

export default personneList;