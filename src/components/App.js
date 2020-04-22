/* eslint-disable no-useless-constructor */
import React from 'react';
import '../stylesheets/_app.scss';
import fetchData from '../services/Fetch';
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      value: '',
      character: []
    }
  }




  componentDidMount(){
    fetchData().then((data) => {
      this.setState({
        data:data.results,
      });
    });
    
  }



  render() {
    return (
      <div className="app-container">
            <CharacterList data={this.state.data}/>
      </div>
    );
  }
}

export default App;
