/* eslint-disable no-useless-constructor */
import React from 'react';
import '../stylesheets/_app.scss';
import fetchData from '../services/Fetch';
import CharacterList from './CharacterList';
import FilterSearch from './FilterSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.state = {
      data: [],
      value: '',
      
    };
  }

  componentDidMount() {
    fetchData().then((data) => {
      this.setState({
        data: data.results,
      });
    });
  }



  handleInputValue(inputValue){
    this.setState({
      value: inputValue,
    });
  }



  render() {
    return (
      <div className="app-container">
        <FilterSearch handleInputValue={this.handleInputValue}/>
        <CharacterList data={this.state.data} inputValue={this.state.value} />
      </div>
    );
  }
}

export default App;
