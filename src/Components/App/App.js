import React, { useState, Component } from 'react';
import './App.css';

import { Form } from '../Form/Form';
import { CountryList } from '../CountryList/CountryList';

import worldBankApi from '../../utils/WorldBankApi';

import LifeExp from '../LifeExp/LifeExp';
import GDP from '../GDP/GDP';
import GNI from '../GNI/GNI';
import Population from '../Population/Population';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCountry: 'gbr',
      selectedCountryLifeExp: {},
      selectedCountryGDP: {},
      selectedCountryPop: {},
      selectedCountryGNI: {}
    };
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  handleCountryChange = (e) => {
    const selected = e.target.textContent; 

    if (selected) {
      this.setState({
        selectedCountry: CountryList[CountryList.findIndex(country => country.country === selected)].code }, () => this.getData())
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    // get life expectancy
    worldBankApi.getData("1960", "lifeExp", this.state.selectedCountry).then(response => this.setState({
      selectedCountryLifeExp: response[1]
    }))

    // get population
    worldBankApi.getData("1960", "pop", this.state.selectedCountry).then(response => this.setState({
      selectedCountryPop: response[1]
    }))

    // get GDP growth
    worldBankApi.getData("1960", "gdpGrowth", this.state.selectedCountry).then(response => this.setState({
      selectedCountryGDP: response[1]
    }))

    // get GNI per capita
    worldBankApi.getData("1960", "gni", this.state.selectedCountry).then(response => this.setState({
      selectedCountryGNI: response[1]
    }))

  }

  render(){
    return (
      <div className="App">
        <div className="form">
          <h2 className="title">World Bank Development Data</h2>
          <p>Select a country below to update the visulidations</p>
          <Form data={CountryList} onChange={this.handleCountryChange}/>
        </div>
        <div className="grid">
          <LifeExp data={this.state.selectedCountryLifeExp} />
          <Population data={this.state.selectedCountryPop} />
          <GDP data={this.state.selectedCountryGDP} />
          <GNI data={this.state.selectedCountryGNI}/>
        </div>
        <footer>
          <p>Powered by the <a href="https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information">World Bank API</a> | Built with ReactJS</p>
        </footer>
      </div>
    );
  }
}

export default App;
