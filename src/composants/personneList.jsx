/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getListPersonnes, selectPersonne } from '../actions/personnesAction';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import moment from 'moment';
import { Redirect } from 'react-router';

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

  onRowDoubleClick(row){
    this.props.dispatch(getListPersonnes());
  }

  render() {
    const { persones,selectedPersone } = this.props;
    let listpersonne = [];
    if (persones) {
      listpersonne = persones;
    }

    const options = {
      onRowDoubleClick: this.onRowDoubleClick
    };
  

  if( selectedPersone.nom ) {
    return ( <Redirect to="/page2"/>)
  }

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