/* eslint-disable no-useless-constructor */
import React from 'react';
import '../stylesheets/_app.scss';
import fetchData from '../services/Fetch';
import CharacterList from './CharacterList';
import FilterSearch from './FilterSearch';
import CharacterDetail from './CharacterDetail';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.state = {
      data: [],
      value: '',
    };
  }

  getDataFromApi() {
    fetchData().then((data) => {
      this.setState({
        data: data.results,
      });
    });

  }


 /*  sortAlphabetical(){
    this.state.data.sort((a,b)=> {
      if (a.this.state.data.name > b.this.state.data.name) {
        return 1;
      }
      if (a.this.state.data.name < b.this.state.data.name) {
        return -1;
      }
      return 0;
    })

  } */

  componentDidMount() {
    this.getDataFromApi();
/*     this.sortAlphabetical(); */
  }

  handleInputValue(inputValue) {
    this.setState({
      value: inputValue,
    });
  }

  renderCharacterDetail(props) {
    const routeID = props.match.params.id;
    const data = this.state.data;
    console.log(data);

    for (let dataItem of data) {
      if (dataItem.id === parseInt(routeID)) {
        return <CharacterDetail dataObj={dataItem} />;
      }
    }
  }

  render() {
    const {data, value} = this.state;
    return (
      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <FilterSearch handleInputValue={this.handleInputValue} value={value}/>

            <CharacterList
              data={data}
              inputValue={value}
            
            />
          </Route>
          <Route path="/detail/:id" render={this.renderCharacterDetail}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
